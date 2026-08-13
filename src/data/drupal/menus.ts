import {
  getClient,
  type AstroDraftContext,
} from "@drupal-canvas/headless-astro";
import type { IFooter } from "@/components/Footer/Footer.types";
import type { INavigation } from "@/components/Navigation/Navigation.types";
import type { ICTA } from "@/types/cta.types";

type DrupalMenuItem = {
  id: string;
  attributes: {
    enabled?: boolean;
    parent?: string | null;
    title?: string | null;
    url?: string | null;
    weight?: number;
  };
};

type DrupalMenuDocument = {
  data?: DrupalMenuItem[];
  errors?: Array<{ status?: string; detail?: string }>;
};

const sortByWeight = (first: DrupalMenuItem, second: DrupalMenuItem) =>
  (first.attributes.weight ?? 0) - (second.attributes.weight ?? 0);

const enabledItems = (items: DrupalMenuItem[]) =>
  items.filter(({ attributes }) => attributes.enabled !== false);

const topLevel = (items: DrupalMenuItem[]) => {
  const ids = new Set(items.map(({ id }) => id));
  return enabledItems(items)
    .filter(({ attributes }) =>
      attributes.parent ? !ids.has(attributes.parent) : true,
    )
    .sort(sortByWeight);
};

const childrenOf = (items: DrupalMenuItem[], parent: string) =>
  enabledItems(items)
    .filter(({ attributes }) => attributes.parent === parent)
    .sort(sortByWeight);

const toCta = (item: DrupalMenuItem): ICTA | null => {
  const children = item.attributes.title?.trim();
  const href = item.attributes.url?.trim();
  if (!children || !href) return null;
  return {
    children,
    href,
    target: /^https?:\/\//i.test(href) ? "_blank" : "_self",
  };
};

async function fetchMenu(
  context: AstroDraftContext,
  menuName: string,
): Promise<DrupalMenuItem[]> {
  const client = await getClient(context);
  const document = (await client.getResource(
    "menu_items",
    menuName,
  )) as DrupalMenuDocument;
  if (document.errors?.length) {
    throw new Error(
      document.errors
        .map(({ status, detail }) =>
          [status, detail].filter(Boolean).join(": "),
        )
        .join("; "),
    );
  }
  if (!Array.isArray(document.data)) {
    throw new Error(`Drupal menu ${menuName} returned an invalid document.`);
  }
  return document.data;
}

export async function getDrupalNavigation(
  context: AstroDraftContext,
  fallback: INavigation | null,
): Promise<INavigation | null> {
  if (!fallback) return null;
  try {
    const items = topLevel(await fetchMenu(context, "main"));
    const ctaItem = items.find(
      ({ attributes }) =>
        attributes.title?.trim().toLowerCase() === "get started",
    );
    const links = items
      .filter(({ id }) => id !== ctaItem?.id)
      .flatMap((item) => {
        const link = toCta(item);
        return link ? [link] : [];
      });
    return {
      ...fallback,
      links: links.length > 0 ? links : fallback.links,
      cta: (ctaItem && toCta(ctaItem)) || fallback.cta,
    };
  } catch (error) {
    console.error("Unable to load the Drupal main menu.", error);
    return fallback;
  }
}

export async function getDrupalFooter(
  context: AstroDraftContext,
  fallback: IFooter | null,
): Promise<IFooter | null> {
  if (!fallback) return null;
  try {
    const items = await fetchMenu(context, "footer");
    const roots = topLevel(items);
    const legal = roots.find(
      ({ attributes }) => attributes.title?.toLowerCase() === "legal",
    );
    const primaryLinks = roots
      .filter(({ id }) => id !== legal?.id)
      .flatMap((root) => {
        const title = root.attributes.title?.trim();
        if (!title) return [];
        return [
          {
            title,
            links: childrenOf(items, root.id).flatMap((child) => {
              const link = toCta(child);
              return link ? [link] : [];
            }),
          },
        ];
      });
    const utilityLinks = legal
      ? childrenOf(items, legal.id).flatMap((child) => {
          const link = toCta(child);
          return link ? [link] : [];
        })
      : [];

    return {
      ...fallback,
      primaryLinks:
        primaryLinks.length > 0 ? primaryLinks : fallback.primaryLinks,
      utilityLinks:
        utilityLinks.length > 0 ? utilityLinks : fallback.utilityLinks,
    };
  } catch (error) {
    console.error("Unable to load the Drupal footer menu.", error);
    return fallback;
  }
}
