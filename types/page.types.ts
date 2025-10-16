import type { IBasic1Up } from "@/components/Basic1Up/Basic1Up.types";
import type { IFeaturedIconGrid } from "@/components/FeaturedIconGrid/FeaturedIconGrid.types";
import type { IFeaturedSolutionsGrid } from "@/components/FeaturedSolutionsGrid/FeaturedSolutionsGrid.types";
import type { IHomepageHero } from "@/components/HomepageHero/HomepageHero.types";
import type { ILogoMarquee } from "@/components/LogoMarquee/LogoMarquee.types";
import type { WithType } from "./global.types";

export interface IBasic1UpData extends IBasic1Up {
  type: "Basic1Up";
}
export interface IFeaturedIconGridData extends IFeaturedIconGrid {
  type: "FeaturedIconGrid";
}
export interface IFeaturedSolutionsGridData extends IFeaturedSolutionsGrid {
  type: "FeaturedSolutionsGrid";
}
export interface IHomepageHeroData extends IHomepageHero {
  type: "HomepageHero";
}
export interface ILogoMarqueeData extends ILogoMarquee {
  type: "LogoMarquee";
}

export type TPageComponentData =
  | IBasic1UpData
  | IFeaturedIconGridData
  | IFeaturedSolutionsGridData
  | IHomepageHeroData
  | ILogoMarqueeData;

export type TPageComponentType = TPageComponentData["type"];

export type TPageComponent = WithType<TPageComponentData>;

export interface IPage {
  title: string;
  description: string;
  components: TPageComponent[];
}
