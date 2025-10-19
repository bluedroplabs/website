import { DynamicComponents } from "@/components/DynamicComponents/DynamicComponents";
import { loadPageData } from "@/utils/data";

export default async function Home() {
  const { components = [] } = (await loadPageData("homepage")) || {};
  return <DynamicComponents components={components} />;
}
