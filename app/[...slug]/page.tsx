import { DynamicComponents } from "@/components/DynamicComponents/DynamicComponents";
import { loadPageData } from "@/utils/data";
import { notFound } from "next/navigation";

export interface IPage {
  params: { slug: string };
}

export default async function Page({ params }: IPage) {
  const {
    slug: [route],
  } = await params;

  if (!route) return notFound();
  const { components = [] } = (await loadPageData(route)) || {};
  return <DynamicComponents components={components} />;
}
