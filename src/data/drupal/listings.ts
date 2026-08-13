import {
  getClient,
  getDraftConfig,
  type AstroDraftContext,
} from "@drupal-canvas/headless-astro";

export type ListingType = "resource" | "service";

export type CanvasListing = {
  id: string;
  title: string;
  description?: string;
  eyebrow: string;
  date: string;
  href: string;
  type?: string;
  topic: string[];
  weight: number;
  image: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
};

type ResourceIdentifier = {
  type: string;
  id: string;
  meta?: {
    alt?: string;
    width?: number;
    height?: number;
  };
};

type Relationship = {
  data?: ResourceIdentifier | ResourceIdentifier[] | null;
};

type CanvasPageResource = {
  type: "canvas_page--canvas_page";
  id: string;
  attributes: {
    title: string;
    path?: { alias?: string | null } | null;
    field_listing_date?: string | null;
    field_listing_enabled?: boolean | null;
    field_listing_eyebrow?: string | null;
    field_listing_summary?:
      string | { value?: string | null; processed?: string | null } | null;
    field_listing_type?: ListingType | null;
    field_listing_weight?: number | null;
    field_resource_type?: string | null;
  };
  relationships: {
    field_listing_image?: Relationship;
    field_listing_topics?: Relationship;
  };
};

type IncludedResource = {
  type: string;
  id: string;
  attributes?: {
    name?: string;
    filename?: string;
    uri?: { url?: string };
  };
  relationships?: {
    field_media_image?: Relationship;
  };
};

type CanvasListingDocument = {
  data?: CanvasPageResource[];
  included?: IncludedResource[];
  errors?: Array<{ status?: string; detail?: string }>;
};

const resourceKey = ({ type, id }: Pick<ResourceIdentifier, "type" | "id">) =>
  `${type}:${id}`;

const firstIdentifier = (relationship?: Relationship) => {
  const data = relationship?.data;
  return Array.isArray(data) ? data[0] : (data ?? undefined);
};

const identifiers = (relationship?: Relationship) => {
  const data = relationship?.data;
  if (!data) return [];
  return Array.isArray(data) ? data : [data];
};

const slugify = (label: string) =>
  label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const formatDate = (value?: string | null) => {
  if (!value) return "";
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value}T12:00:00Z`));
};

const summaryValue = (
  value: CanvasPageResource["attributes"]["field_listing_summary"],
) => {
  if (typeof value === "string") return value;
  return value?.processed ?? value?.value ?? undefined;
};

/**
 * Fetches the bounded Canvas page collection used by every visual listing.
 *
 * Filtering happens after deserialization so one draft-aware request can serve
 * both listing types and consistently uses the revision selected by Canvas.
 */
export async function getCanvasListings(
  context: AstroDraftContext,
  listingType: ListingType,
  { limit = 50, excludePath }: { limit?: number; excludePath?: string } = {},
): Promise<CanvasListing[]> {
  const client = await getClient(context);
  const params = new URLSearchParams();

  params.set("sort", "field_listing_weight");
  params.set("page[limit]", "50");
  params.set(
    "include",
    "field_listing_image.field_media_image,field_listing_topics",
  );
  params.set(
    "fields[canvas_page--canvas_page]",
    [
      "title",
      "path",
      "field_listing_date",
      "field_listing_enabled",
      "field_listing_eyebrow",
      "field_listing_summary",
      "field_listing_type",
      "field_listing_weight",
      "field_resource_type",
      "field_listing_image",
      "field_listing_topics",
    ].join(","),
  );
  params.set("fields[media--image]", "name,field_media_image");
  params.set("fields[file--file]", "filename,uri");
  params.set("fields[taxonomy_term--tags]", "name");

  const document = (await client.getCollection("canvas_page--canvas_page", {
    queryString: params.toString(),
  })) as CanvasListingDocument;

  if (document.errors?.length) {
    throw new Error(
      document.errors
        .map(({ status, detail }) =>
          [status, detail].filter(Boolean).join(": "),
        )
        .join("; "),
    );
  }

  const included = new Map(
    (document.included ?? []).map((resource) => [
      resourceKey(resource),
      resource,
    ]),
  );
  const baseUrl = getDraftConfig().baseUrl;

  return (document.data ?? [])
    .filter(
      (page) =>
        page.attributes.field_listing_enabled === true &&
        page.attributes.field_listing_type === listingType &&
        page.attributes.path?.alias !== excludePath,
    )
    .flatMap((page) => {
      const mediaIdentifier = firstIdentifier(
        page.relationships.field_listing_image,
      );
      const mediaResource = mediaIdentifier
        ? included.get(resourceKey(mediaIdentifier))
        : undefined;
      const fileIdentifier = firstIdentifier(
        mediaResource?.relationships?.field_media_image,
      );
      const fileResource = fileIdentifier
        ? included.get(resourceKey(fileIdentifier))
        : undefined;
      const imagePath = fileResource?.attributes?.uri?.url;
      const href = page.attributes.path?.alias;

      if (!imagePath || !href) return [];

      const topics = identifiers(page.relationships.field_listing_topics)
        .map((identifier) => included.get(resourceKey(identifier)))
        .flatMap((term) =>
          term?.attributes?.name ? [slugify(term.attributes.name)] : [],
        );

      return [
        {
          id: page.id,
          title: page.attributes.title,
          description: summaryValue(page.attributes.field_listing_summary),
          eyebrow:
            page.attributes.field_listing_eyebrow ??
            (listingType === "service" ? "Service" : "Resource"),
          date: formatDate(page.attributes.field_listing_date),
          href,
          type: page.attributes.field_resource_type ?? undefined,
          topic: topics,
          weight: page.attributes.field_listing_weight ?? 0,
          image: {
            src: new URL(imagePath, baseUrl).toString(),
            alt:
              fileIdentifier?.meta?.alt ??
              mediaResource?.attributes?.name ??
              page.attributes.title,
            width: fileIdentifier?.meta?.width,
            height: fileIdentifier?.meta?.height,
          },
        },
      ];
    })
    .sort((first, second) => first.weight - second.weight)
    .slice(0, Math.max(1, Math.min(50, limit)));
}
