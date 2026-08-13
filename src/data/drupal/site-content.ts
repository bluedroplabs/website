import { getDraftConfig } from "@drupal-canvas/headless-astro";
import type { IFooter } from "@/components/Footer/Footer.types";
import type { INavigation } from "@/components/Navigation/Navigation.types";
import type { ICtaBlock } from "@/components/CtaBlock/CtaBlock.types";

export interface DrupalSiteContent {
  navigation: Partial<INavigation>;
  footer: Partial<IFooter>;
  ctaBlock: ICtaBlock;
}

export async function getDrupalSiteContent(
  fallback: DrupalSiteContent,
): Promise<DrupalSiteContent> {
  try {
    const response = await fetch(
      new URL("/api/bluedrop/site-content", getDraftConfig().baseUrl),
      { headers: { Accept: "application/json" } },
    );
    if (!response.ok) {
      throw new Error(`Drupal site content returned HTTP ${response.status}.`);
    }
    const content = (await response.json()) as Partial<DrupalSiteContent>;
    return {
      navigation: { ...fallback.navigation, ...content.navigation },
      footer: { ...fallback.footer, ...content.footer },
      ctaBlock: content.ctaBlock ?? fallback.ctaBlock,
    };
  } catch (error) {
    console.error("Unable to load Drupal global site content.", error);
    return fallback;
  }
}
