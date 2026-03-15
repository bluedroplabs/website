import { DynamicComponents } from "@/components/DynamicComponents/DynamicComponents";
import { StructuredData } from "@/components/StructuredData/StructuredData";
import { loadPageData } from "@/utils/data";
import { buildArticleSchema, buildWebPageSchema } from "@/utils/structuredData";
import fs from "fs";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import path from "path";
import { preload } from "react-dom";

interface PageProps {
  params: { slug: string[] };
}

export async function generateStaticParams() {
  const dataDir = path.join(process.cwd(), "data");
  const slugs: { slug: string[] }[] = [];
  const dataFiles = fs.readdirSync(dataDir);
  const resourcesDir = path.join(dataDir, "resources");

  dataFiles.forEach((file) => {
    if (file.endsWith(".yaml")) {
      const slug = file.replace(/\.yaml$/, "");
      slugs.push({ slug: [slug] });
    }
  });

  if (fs.existsSync(resourcesDir)) {
    const resourceTypeDirs = fs.readdirSync(resourcesDir, {
      withFileTypes: true,
    });

    for (const dirent of resourceTypeDirs) {
      if (!dirent.isDirectory()) continue;

      const typeDir = path.join(resourcesDir, dirent.name);
      const typeFiles = fs.readdirSync(typeDir);

      typeFiles.forEach((file) => {
        if (file.endsWith(".yaml")) {
          const slug = file.replace(/\.yaml$/, "");
          slugs.push({ slug: ["resources", dirent.name, slug] });
        }
      });
    }
  }

  return slugs;
}

const OG_LOGO = "/assets/logo.svg";

function getOgImage(
  slug: string[],
  pageData: { components?: unknown[] } | null,
): string {
  if (!pageData?.components?.length) return OG_LOGO;

  const firstComponent = pageData.components[0] as {
    type?: string;
    image?: { src?: string };
  };

  const isLogoPage =
    slug.length === 1 &&
    (slug[0] === "about-us" || slug[0] === "resources");

  if (isLogoPage) return OG_LOGO;

  if (
    firstComponent?.type === "DetailPageHero" &&
    firstComponent?.image?.src
  ) {
    return firstComponent.image.src;
  }

  return OG_LOGO;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pageData = loadPageData(slug);
  const image = getOgImage(slug, pageData);

  return {
    title: pageData?.title,
    description: pageData?.description,
    openGraph: {
      title: pageData?.title,
      description: pageData?.description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: pageData?.title,
      description: pageData?.description,
      images: [image],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  if (!slug?.length) notFound();

  let pageData;

  try {
    pageData = await loadPageData(slug);
  } catch (error) {
    console.error(`Error loading page data for /${slug.join("/")}:`, error);
    notFound();
  }

  if (!pageData) notFound();

  const { components = [], title, description } = pageData;
  const path = "/" + slug.join("/");

  const isResource = slug.length > 1 && slug[0] === "resources";
  const firstComponent = components[0] as unknown as {
    type?: string;
    author?: string;
    date?: string;
    eyebrow?: string;
    title?: string;
    image?: { src?: string };
  };

  const schema = isResource
    ? buildResourceSchema(pageData, path, firstComponent)
    : buildWebPageSchema(title ?? "", path, description);

  // Preload the hero image to improve LCP discovery
  if (firstComponent?.image?.src) {
    preload(firstComponent.image.src, { as: "image", fetchPriority: "high" });
  }

  return (
    <>
      <StructuredData data={schema} />
      <DynamicComponents components={components} />
    </>
  );
}

function buildResourceSchema(
  pageData: { title?: string; description?: string },
  path: string,
  hero: {
    author?: string;
    date?: string;
    eyebrow?: string;
    image?: { src?: string };
  },
) {
  const { title, description } = pageData;
  const options = {
    description,
    image: hero?.image?.src,
    author: hero?.author,
    datePublished: hero?.date,
    dateModified: hero?.date,
  };

  return buildArticleSchema(title ?? "", path, options);
}
