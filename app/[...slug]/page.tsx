import { DynamicComponents } from "@/components/DynamicComponents/DynamicComponents";
import { loadPageData } from "@/utils/data";
import { notFound } from "next/navigation";

export interface IPage {
  params: { slug: string[] };
}

export default async function Page({ params }: IPage) {
  const { slug } = await params;
  if (!slug || slug.length === 0) return notFound();
  const { components = [] } = (await loadPageData(slug)) || {};
  return <DynamicComponents components={components} />;
}
