import { DynamicComponents } from "@/components/DynamicComponents/DynamicComponents";
import { loadPageData } from "@/utils/data";

export default function NotFound() {
  const pageData = loadPageData(["404"]);
  const { components = [] } = pageData || {};

  return <DynamicComponents components={components} />;
}
