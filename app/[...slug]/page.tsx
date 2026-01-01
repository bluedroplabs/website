import { DynamicComponents } from "@/components/DynamicComponents/DynamicComponents";
import { loadPageData } from "@/utils/data";
import fs from "fs";
import { notFound } from "next/navigation";
import path from "path";

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
    const resourceFiles = fs.readdirSync(resourcesDir);

    resourceFiles.forEach((file) => {
      if (file.endsWith(".yaml")) {
        const slug = file.replace(/\.yaml$/, "");
        slugs.push({ slug: ["resources", slug] });
      }
    });
  }

  return slugs;
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

  const { components = [] } = pageData;
  return <DynamicComponents components={components} />;
}
