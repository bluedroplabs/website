import { DynamicComponents } from "@/components/DynamicComponents/DynamicComponents";
import { loadPageData } from "@/utils/data";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export interface IPageProps {
  params: { slug: string[] };
}

export async function generateMetadata({
  params,
}: IPageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!slug || slug.length === 0) return {};
  const pageData = loadPageData(slug);
  if (!pageData) return {};

  return {
    title: pageData.title,
    description: pageData.description,
  };
}

export default async function Page({ params }: IPageProps) {
  const { slug } = await params;
  if (!slug || slug.length === 0) return notFound();
  const { components = [] } = loadPageData(slug) || {};
  return <DynamicComponents components={components} />;
}
