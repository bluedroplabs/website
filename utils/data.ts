import type { ICtaBlock } from "@/components/CtaBlock/CtaBlock.types";
import type { IFooter } from "@/components/Footer/Footer.types";
import type { INavigation } from "@/components/Navigation/Navigation.types";
import type { IPage } from "@/types/page.types";
import { readFileSync } from "fs";
import { join } from "path";
import { parse } from "yaml";

/**
 * Loads and parses the CTA Block configuration from YAML file
 * @returns Parsed CTA Block configuration data
 */
export function loadCtaBlockData(): ICtaBlock | null {
  try {
    const ctaBlockPath = join(process.cwd(), "data", "ctaBlock.yaml");
    const ctaBlockContents = readFileSync(ctaBlockPath, "utf8");
    return parse(ctaBlockContents);
  } catch (error) {
    console.error("Error loading CTA Block data:", error);
    return null;
  }
}

/**
 * Loads and parses the Footer configuration from YAML file
 * @returns Parsed Footer configuration data
 */
export function loadFooterData(): IFooter | null {
  try {
    const footerPath = join(process.cwd(), "data", "footer.yaml");
    const footerContents = readFileSync(footerPath, "utf8");
    return parse(footerContents);
  } catch (error) {
    console.error("Error loading Footer data:", error);
    return null;
  }
}

/**
 * Loads and parses the Navigation configuration from YAML file
 * @returns Parsed Navigation configuration data
 */
export function loadNavigationData(): INavigation | null {
  try {
    const navigationPath = join(process.cwd(), "data", "navigation.yaml");
    const navigationContents = readFileSync(navigationPath, "utf8");
    return parse(navigationContents);
  } catch (error) {
    console.error("Error loading Navigation data:", error);
    return null;
  }
}

/**
 * Loads and parses the Page configuration from YAML file
 * @returns Parsed Page configuration data
 */
export function loadPageData(paths: string[]): IPage | null {
  try {
    const fileName = paths[paths.length - 1];
    const route = [...paths].splice(0, paths.length - 1);
    const pagePath = join(process.cwd(), "data", ...route, `${fileName}.yaml`);
    const pageContents = readFileSync(pagePath, "utf8");
    return parse(pageContents);
  } catch (error) {
    console.error("Error loading Page data:", error);
    return null;
  }
}
