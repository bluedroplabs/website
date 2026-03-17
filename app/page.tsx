import { DynamicComponents } from "@/components/DynamicComponents/DynamicComponents";
import { StructuredData } from "@/components/StructuredData/StructuredData";
import { loadPageData } from "@/utils/data";
import { buildWebSiteSchema } from "@/utils/structuredData";
import type { Metadata } from "next";

const OG_LOGO = "/assets/logo.svg";

export async function generateMetadata(): Promise<Metadata> {
  const pageData = loadPageData(["homepage"]);
  return {
    title: pageData?.title,
    description: pageData?.description,
    openGraph: {
      title: pageData?.title,
      description: pageData?.description,
      images: [OG_LOGO],
    },
    twitter: {
      card: "summary_large_image",
      title: pageData?.title,
      description: pageData?.description,
      images: [OG_LOGO],
    },
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
