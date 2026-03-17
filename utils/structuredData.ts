const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.bluedroplabs.com";

function ensureTrailingSlash(path: string): string {
  const clean = BASE_URL.replace(/\/$/, "") + path;
  return path.endsWith("/") ? clean : clean + "/";
}

export interface WebPageSchema {
  "@context": "https://schema.org";
  "@type": "WebPage";
  name: string;
  description?: string;
  url: string;
}

export interface WebSiteSchema {
  "@context": "https://schema.org";
  "@type": "WebSite";
  name: string;
  description?: string;
  url: string;
}

/**
 * Schema.org Article. Used for case studies, articles, and other editorial content.
 * Schema.org does not define a separate CaseStudy type; Article is the appropriate type.
 */
export interface ArticleSchema {
  "@context": "https://schema.org";
  "@type": "Article";
  headline: string;
  description?: string;
  url: string;
  image?: string;
  author?: { "@type": "Person"; name: string };
  datePublished?: string;
  dateModified?: string;
}

export function buildWebPageSchema(
  title: string,
  path: string,
  description?: string,
): WebPageSchema {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description: description ?? undefined,
    url: ensureTrailingSlash(path),
  };
}

export function buildWebSiteSchema(
  name: string,
  description?: string,
): WebSiteSchema {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    description: description ?? undefined,
    url: ensureTrailingSlash("/"),
  };
}

function parseDateToISO(dateStr: string | undefined): string | undefined {
  if (!dateStr?.trim()) return undefined;
  try {
    const d = new Date(dateStr);
    return isNaN(d.getTime()) ? undefined : d.toISOString().slice(0, 10);
  } catch {
    return undefined;
  }
}

export function buildArticleSchema(
  title: string,
  path: string,
  options: {
    description?: string;
    image?: string;
    author?: string;
    datePublished?: string;
    dateModified?: string;
  } = {},
): ArticleSchema {
  const schema: ArticleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: options.description,
    url: ensureTrailingSlash(path),
  };

  if (options.image) {
    schema.image = options.image.startsWith("http")
      ? options.image
      : BASE_URL.replace(/\/$/, "") + options.image;
  }

  if (options.author) {
    schema.author = { "@type": "Person", name: options.author };
  }

  const datePublished = parseDateToISO(options.datePublished);
  if (datePublished) schema.datePublished = datePublished;
  const dateModified = parseDateToISO(options.dateModified);
  if (dateModified) schema.dateModified = dateModified;

  return schema;
}
