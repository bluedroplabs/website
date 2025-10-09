import type { ICtaBlock } from "@/components/CtaBlock/CtaBlock.types";
import type { IFooter } from "@/components/Footer/Footer.types";
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
