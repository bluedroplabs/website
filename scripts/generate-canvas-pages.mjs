import { promises as fs } from "node:fs";
import path from "node:path";

import YAML from "yaml";

const root = process.cwd();
const dataRoot = path.join(root, "data");
const pagesRoot = path.join(root, "pages");

const pageSources = [
  "404.yaml",
  "about-us.yaml",
  "contact.yaml",
  "dentzau-is-now-blue-drop.yaml",
  "homepage.yaml",
  "platform.yaml",
  "privacy-policy.yaml",
  "resources.yaml",
  "services.yaml",
  "subprocessors.yaml",
  "terms-of-use.yaml",
  "resources/case-studies/automating-a-media-platform-into-an-ai-powered-engine.yaml",
  "resources/case-studies/building-enterprise-grade-infrastructure.yaml",
  "resources/case-studies/helping-lifestyle-company-cut-software-costs-70.yaml",
  "resources/case-studies/how-we-achieved-10ms-response-times-globally.yaml",
  "resources/case-studies/turning-traffic-spikes-into-revenue.yaml",
  "services/api-custom-development.yaml",
  "services/drupal-7-extended-support.yaml",
  "services/drupal-and-wordpress-development.yaml",
  "services/drupal-and-wordpress-support.yaml",
  "services/seo-and-marketing.yaml",
];

const paths = {
  "404.yaml": "/404",
  "about-us.yaml": "/about-us",
  "contact.yaml": "/contact",
  "dentzau-is-now-blue-drop.yaml": "/dentzau-is-now-blue-drop",
  "homepage.yaml": "/",
  "platform.yaml": "/platform",
  "privacy-policy.yaml": "/privacy-policy",
  "resources.yaml": "/resources",
  "services.yaml": "/services",
  "subprocessors.yaml": "/subprocessors",
  "terms-of-use.yaml": "/terms-of-use",
};

const topicNames = {
  "ui-ux": "UI/UX",
  drupal: "Drupal",
  wordpress: "WordPress",
  cms: "CMS",
};

const readYaml = async (relativePath) =>
  YAML.parse(await fs.readFile(path.join(dataRoot, relativePath), "utf8"));

const resourcesIndex = await readYaml("resources.yaml");
const resourceCards = new Map(
  resourcesIndex.components
    .find(({ type }) => type === "CardGrid")
    .items.map((item, weight) => [item.href, { ...item, weight }]),
);
const servicesIndex = await readYaml("services.yaml");
const serviceCards = new Map(
  servicesIndex.components
    .find(({ type }) => type === "FeaturedSolutionsGrid")
    .solutions.map((item, weight) => [item.href, { ...item, weight }]),
);

const toPagePath = (relativePath) =>
  paths[relativePath] ?? `/${relativePath.replace(/\.yaml$/, "")}`;

const toDate = (value) => {
  if (!value) return undefined;
  const date = new Date(`${value} 12:00:00 UTC`);
  return Number.isNaN(date.valueOf()) ? undefined : date.toISOString().slice(0, 10);
};

const media = (image) =>
  image?.src ? { mediaSource: image.src } : undefined;
const darkMedia = (image) =>
  image?.srcDark ? { mediaSource: image.srcDark } : undefined;
const cta = (value, prefix = "cta") => ({
  [`${prefix}Label`]: value?.children,
  [`${prefix}Url`]: value?.href,
});

const clean = (value) => {
  if (Array.isArray(value)) return value.map(clean);
  if (!value || typeof value !== "object") return value;
  return Object.fromEntries(
    Object.entries(value)
      .filter(([, child]) => child !== undefined)
      .map(([key, child]) => [key, clean(child)]),
  );
};

function buildElements(source, pagePath) {
  let sequence = 0;
  const elements = {};
  const add = (type, props = {}) => {
    sequence += 1;
    const id = `${String(sequence).padStart(3, "0")}-${type}`;
    elements[id] = { type: `js.${type}`, props: clean(props) };
    return id;
  };
  const setSlot = (id, slot, children) => {
    elements[id].slots ??= {};
    elements[id].slots[slot] = children;
  };

  const iconCollection = (component, variant) => {
    const parent = add("icon-collection", {
      variant,
      columns: [2, 3, 4].includes(component.columns)
        ? component.columns
        : variant === "list" || variant === "split"
          ? 2
          : 3,
      eyebrow: component.eyebrow,
      title: component.title,
      description: component.description,
    });
    setSlot(
      parent,
      "items",
      (component.items ?? []).map((item) =>
        add("icon-card", {
          variant: component.variant === "inline" ? "inline" : "default",
          icon: item.icon,
          title: item.title ?? item.description,
          description: item.title ? item.description : undefined,
        }),
      ),
    );
    return parent;
  };

  const solutions = (component, variant) => {
    const parent = add("solutions-collection", {
      variant,
      eyebrow: component.eyebrow,
      title: component.title,
      description: component.description,
      ctaLabel: component.primaryCTA?.children,
      ctaUrl: component.primaryCTA?.href,
    });
    setSlot(
      parent,
      "items",
      (component.solutions ?? []).map((item) =>
        add("solution-card", {
          variant: variant === "row" ? "full" : "basic",
          eyebrow: item.eyebrow,
          title: item.title,
          description: item.description,
          image: media(item.image),
          darkImage: darkMedia(item.image),
          url: item.href,
        }),
      ),
    );
    return parent;
  };

  const mapComponent = (component) => {
    switch (component.type) {
      case "HomepageHero":
        return add("homepage-hero", {
          title: component.title,
          description: component.description,
          ...cta(component.cta),
          ctaTarget: component.cta?.target ?? "_self",
        });
      case "GradientHero":
        return add("gradient-hero", {
          variant: "primary",
          eyebrow: component.eyebrow,
          title: component.title,
          description: component.description,
        });
      case "DetailPageHero":
        return add("detail-page-hero", {
          variant: pagePath.startsWith("/resources/")
            ? "article"
            : pagePath === "/platform"
              ? "platform"
              : "service",
          eyebrow: component.eyebrow,
          title: component.title,
          description: component.description,
          author: component.author,
          date: component.date,
          image: media(component.image),
          darkImage: darkMedia(component.image),
          ...cta(component.primaryCTA, "primaryCta"),
          ...cta(component.secondaryCTA, "secondaryCta"),
        });
      case "Basic1Up":
        return add("basic-one-up", {
          alignment: component.alignment ?? "left",
          eyebrow: component.eyebrow,
          title: component.title,
          description: component.description,
          blockquote: component.blockquote,
          image: media(component.image),
          darkImage: darkMedia(component.image),
          ...cta(component.primaryCTA, "primaryCta"),
          ...cta(component.secondaryCTA, "secondaryCta"),
        });
      case "FeaturedText":
        return add("featured-text", {
          variant: component.variant === "small" ? "small" : "default",
          background: component.bgVariant === "sky" ? "sky" : "none",
          eyebrow: component.eyebrow,
          title: component.title,
          description: component.description,
          author: component.author,
        });
      case "FeaturedSplitText":
        return add("split-text", {
          title: component.title,
          description: component.description,
        });
      case "InlineTextBlock":
        return add("inline-text-block", {
          eyebrow: component.eyebrow,
          title: component.title,
          description: component.description,
          blockquote: component.blockquote,
          ...cta(component.primaryCTA, "primaryCta"),
        });
      case "FeaturedTextCta":
        return add("text-cta", {
          variant: component.variant === "heading" ? "heading" : "body",
          text: component.text,
          ...cta(component.cta),
        });
      case "FeaturedCtaBand":
        return add("cta-band", {
          variant: ["inline", "centered"].includes(component.variant)
            ? component.variant
            : "stacked",
          title: component.title,
          description: component.description,
          text: component.text,
          ...cta(component.cta),
        });
      case "CtaBlock":
        return add("cta-block", {
          title: component.title,
          description: component.description,
          ...cta(component.cta),
          ctaTarget: component.cta?.target ?? "_self",
        });
      case "GridSeparator":
        return add("grid-separator");
      case "ContactForm":
        return add("contact-form", {
          contactTitle: component.contactTitle ?? "Start a conversation",
          contactDescription: component.contactDescription,
          contactEmail: component.contactEmail,
          contactEmailHref: component.contactEmailHref,
          formAction: component.formAction ?? "/api/contact",
          submitButtonText: component.submitButtonText ?? "Send message",
        });
      case "FeaturedIconGrid":
        return iconCollection(component, "grid");
      case "FeaturedIconList":
        return iconCollection(component, "list");
      case "FeaturedIconListGrid":
        return iconCollection(component, "list-grid");
      case "FeaturedSplitIconList":
        return iconCollection(component, "split");
      case "FeaturedAccordionList": {
        const parent = add("accordion-list", {
          title: component.title,
          description: component.description,
        });
        setSlot(
          parent,
          "items",
          (component.items ?? []).map((item) =>
            add("accordion-item", {
              title: item.title,
              content: item.content?.replaceAll("className=", "class="),
              openByDefault: false,
            }),
          ),
        );
        return parent;
      }
      case "FeaturedProcessList": {
        const parent = add("process-list", {
          title: component.title,
          description: component.description,
        });
        setSlot(
          parent,
          "items",
          (component.items ?? []).map((item) =>
            add("process-step", {
              title: item.title,
              description: item.description,
            }),
          ),
        );
        return parent;
      }
      case "FeaturedTextList": {
        const parent = add("text-list", {
          title: component.title,
          description: component.description,
        });
        setSlot(
          parent,
          "items",
          (component.items ?? []).map((text) => add("text-list-item", { text })),
        );
        return parent;
      }
      case "LogoMarquee": {
        const parent = add("logo-marquee", { description: component.description });
        setSlot(
          parent,
          "logos",
          (component.logos ?? []).map((logo) =>
            add("logo-item", {
              name: logo.alt,
              icon: logo.icon,
              url: logo.href,
            }),
          ),
        );
        return parent;
      }
      case "FeaturedSolutionsGrid":
        if (pagePath === "/services") {
          return add("resource-list", {
            listingType: "service",
            limit: 12,
            showFilters: false,
          });
        }
        return solutions(component, "grid");
      case "FeaturedSolutionsRow":
        return solutions(component, "row");
      case "FeaturedServiceCategories": {
        const parent = add("service-categories", {
          eyebrow: component.eyebrow,
          title: component.title,
          description: component.description,
        });
        const categories = (component.groups ?? []).map((group) => {
          const category = add("service-category", {
            title: group.title,
            description: group.description,
          });
          const offerings = (group.items ?? []).map((item) => {
            const offering = add("service-offering", {
              icon: item.icon,
              title: item.title,
            });
            setSlot(
              offering,
              "features",
              (item.features ?? []).map((text) => add("feature-item", { text })),
            );
            return offering;
          });
          setSlot(category, "offerings", offerings);
          return category;
        });
        setSlot(parent, "categories", categories);
        return parent;
      }
      case "SolutionsPackage": {
        const parent = add("package-list", {
          eyebrow: component.eyebrow,
          title: component.title,
          description: component.description,
          footerTitle: component.footer?.title,
        });
        const packages = (component.packages ?? []).map((item) => {
          const description = [
            item.description,
            item.featuresIntro ? `<strong>${item.featuresIntro}</strong>` : undefined,
          ]
            .filter(Boolean)
            .join("<br />");
          const card = add("package-card", {
            variant: item.variant === "highlight" ? "highlight" : "default",
            icon: item.icon,
            title: item.title,
            description,
            price: item.price,
            priceSuffix: item.priceSuffix,
            ctaLabel: item.cta?.children ?? "Contact us",
            ctaUrl: item.cta?.href ?? "/contact",
          });
          setSlot(
            card,
            "features",
            (item.features ?? []).map((text) => add("feature-item", { text })),
          );
          return card;
        });
        setSlot(parent, "packages", packages);
        setSlot(
          parent,
          "footerItems",
          (component.footer?.items ?? []).map((text) =>
            add("feature-item", { text }),
          ),
        );
        return parent;
      }
      case "ComparisonTable": {
        const visibleColumns = (component.columns ?? []).filter(
          (column) => column.name || column.header,
        );
        const highlighted = visibleColumns.findIndex(
          (column) => column.isHighlighted,
        );
        const parent = add("comparison-table", {
          eyebrow: component.eyebrow,
          title: component.title,
          description: component.description,
          caption: component.caption,
          firstColumnLabel: visibleColumns[0]?.name ?? visibleColumns[0]?.header,
          secondColumnLabel: visibleColumns[1]?.name ?? visibleColumns[1]?.header,
          thirdColumnLabel: visibleColumns[2]?.name ?? visibleColumns[2]?.header,
          highlightedColumn: ["first", "second", "third"][highlighted] ?? "none",
        });
        const displayValue = (value) =>
          typeof value === "boolean" ? (value ? "✓" : "—") : String(value ?? "");
        setSlot(
          parent,
          "rows",
          (component.rows ?? []).map((row) =>
            add("comparison-row", {
              label: row.label,
              firstValue: displayValue(row.values?.[0]),
              secondValue: displayValue(row.values?.[1]),
              thirdValue:
                row.values?.length > 2 ? displayValue(row.values[2]) : undefined,
            }),
          ),
        );
        return parent;
      }
      case "Wysiwyg": {
        const parent = add("rich-content", {
          variant: ["/privacy-policy", "/terms-of-use", "/subprocessors"].includes(
            pagePath,
          )
            ? "legal"
            : "article",
        });
        const content = (component.components ?? []).map((item) => {
          if (item.type === "RichText") {
            return add("rich-text", { content: item.content });
          }
          if (item.type === "InlineImage") {
            return add("inline-image", { image: media(item.image) });
          }
          if (item.type === "Metrics") {
            const metrics = add("metrics-grid", { title: item.title });
            setSlot(
              metrics,
              "metrics",
              (item.metrics ?? []).map((metric) =>
                add("metric-item", {
                  value: metric.value,
                  description: metric.description,
                }),
              ),
            );
            return metrics;
          }
          throw new Error(`Unsupported Wysiwyg component ${item.type}.`);
        });
        setSlot(parent, "content", content);
        if (component.details) {
          const aside = add("details-aside", {
            ctaLabel: component.details.cta?.children,
            ctaUrl: component.details.cta?.href,
          });
          setSlot(
            aside,
            "groups",
            (component.details.details ?? []).map((group) =>
              add("detail-group", {
                label: group.label,
                items: (group.items ?? [])
                  .map((item) =>
                    typeof item === "string"
                      ? item
                      : `<a href="${item.href}">${item.text}</a>`,
                  )
                  .join("\n"),
              }),
            ),
          );
          setSlot(parent, "aside", [aside]);
        }
        return parent;
      }
      case "CardGrid":
        return add("resource-list", {
          listingType: "resource",
          limit: component.limit ?? 10,
          showFilters: true,
        });
      case "RelatedArticles":
        return add("related-resources", {
          title: component.title,
          limit: 3,
        });
      default:
        throw new Error(`Unsupported page component ${component.type}.`);
    }
  };

  for (const component of source.components ?? []) mapComponent(component);
  return elements;
}

function listingFor(pagePath) {
  const resource = resourceCards.get(pagePath);
  if (resource) {
    return {
      enabled: true,
      type: "resource",
      resourceType: resource.type,
      eyebrow: resource.eyebrow,
      summary: resource.description,
      date: toDate(resource.date),
      weight: resource.weight,
      imageSource: resource.image?.src,
      topicNames: (resource.topic ?? []).map((topic) => topicNames[topic] ?? topic),
    };
  }
  const service = pagePath.startsWith("/services/")
    ? serviceCards.get(pagePath)
    : undefined;
  if (service) {
    return {
      enabled: true,
      type: "service",
      eyebrow: service.eyebrow ?? "Service",
      summary: service.description,
      weight: service.weight,
      imageSource: service.image?.src,
    };
  }
  return undefined;
}

await fs.mkdir(pagesRoot, { recursive: true });

for (const relativePath of pageSources) {
  const source = await readYaml(relativePath);
  const pagePath = toPagePath(relativePath);
  const spec = clean({
    title: source.title,
    path: pagePath,
    description: source.description,
    listing: listingFor(pagePath),
    elements: buildElements(source, pagePath),
  });
  const filename =
    pagePath === "/" ? "home.json" : `${pagePath.slice(1).replaceAll("/", "--")}.json`;
  await fs.writeFile(
    path.join(pagesRoot, filename),
    `${JSON.stringify(spec, null, 2)}\n`,
  );
}

const designCard = [...serviceCards.values()].find(
  ({ title }) => title === "Design + Experience",
);
const designPath = "/services/design-and-experience";
if (designCard) {
  const source = {
    title: designCard.title,
    description: designCard.description,
    components: [
      {
        type: "DetailPageHero",
        title: designCard.title,
        description: designCard.description,
        image: designCard.image,
        primaryCTA: { children: "Book a Consultation", href: "/contact" },
      },
      {
        type: "FeaturedSplitText",
        title: "Digital experiences designed to perform",
        description:
          "We create polished, accessible interfaces with high-fidelity visuals and consistent brand systems, built around your users and your business goals.",
      },
      { type: "GridSeparator" },
    ],
  };
  const spec = {
    title: source.title,
    path: designPath,
    description: source.description,
    listing: {
      enabled: true,
      type: "service",
      eyebrow: "Service",
      summary: designCard.description,
      weight: designCard.weight,
      imageSource: designCard.image?.src,
    },
    elements: buildElements(source, designPath),
  };
  await fs.writeFile(
    path.join(pagesRoot, "services--design-and-experience.json"),
    `${JSON.stringify(clean(spec), null, 2)}\n`,
  );
}

console.log(`Generated ${pageSources.length + (designCard ? 1 : 0)} Canvas page specs.`);
