import { DynamicComponents } from "@/components/DynamicComponents/DynamicComponents";
import { loadPageData } from "@/utils/data";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const pageData = loadPageData(["homepage"]);
  return {
    title: pageData?.title,
    description: pageData?.description,
  };
}

export default async function Home() {
  const { components = [] } = loadPageData(["homepage"]) || {};
  return <DynamicComponents components={components} />;
}
