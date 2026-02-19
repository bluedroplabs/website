import type { HTMLAttributes } from "react";
import type { IContentBlock } from "../ContentBlock/ContentBlock.types";
import type { IFeaturedTextList } from "../FeaturedTextList/FeaturedTextList.types";
import type { IPackageCard } from "../PackageCard/PackageCard.types";

/**
 * Props for the SolutionsPackage component.
 */
export interface ISolutionsPackage
  extends
    HTMLAttributes<HTMLElement>,
    Pick<IContentBlock, "title" | "eyebrow" | "description"> {
  /**
   * Footer content for the solutions package.
   */
  footer: IFeaturedTextList;

  /**
   * Packages to be displayed in the solutions package.
   */
  packages: IPackageCard[];
}
