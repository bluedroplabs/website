import { DynamicComponents } from "@/components/DynamicComponents/DynamicComponents";
import { StructuredData } from "@/components/StructuredData/StructuredData";
import { loadPageData } from "@/utils/data";
import { buildWebSiteSchema } from "@/utils/structuredData";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const pageData = loadPageData(["homepage"]);
  return {
    title: pageData?.title,
    description: pageData?.description,
  };
}

export default async function Home() {
  const pageData = loadPageData(["homepage"]);
  const components = pageData?.components ?? [];
  const title = pageData?.title ?? "Blue Drop Labs";
  const description = pageData?.description;
  const schema = buildWebSiteSchema(title, description);

  return (
    <>
      <StructuredData data={schema} />
      <DynamicComponents components={components} />
    </>
  );
}
