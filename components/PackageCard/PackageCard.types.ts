import type { ICTA } from "@/types/cta.types";
import type { HTMLAttributes } from "react";
import type { IList } from "../List/List.types";

/**
 * Variants that define the visual style of the PackageCard component.
 * - `default`: The main style, usually used for emphasis.
 * - `highlight`: A secondary style for highlighting purposes.
 */
export type TPackageCardVariant = "default" | "highlight";

/**
 * Props for the PackageCard component.
 */
export interface IPackageCard extends HTMLAttributes<HTMLElement> {
  /**
   * Call to action button properties.
   */
  cta: ICTA;

  /**
   * Short description text displayed within or alongside the component.
   * Supports inline HTML (e.g. `<strong>`).
   */
  description?: string;

  /**
   * List of feature bullets.
   */
  features: IList["items"];

  /**
   * Optional plain text line displayed above the features list
   * without a bullet (e.g. "Everything in Basic, plus:").
   */
  featuresIntro?: string;

  /**
   * Optional icon rendered above the title. Must match a key in the
   * PackageCard iconMap.
   */
  icon?: string;

  /**
   * Prominent price label (e.g. "$250" or "Custom pricing").
   */
  price?: string;

  /**
   * Light-weight suffix rendered after the price (e.g. "per month").
   */
  priceSuffix?: string;

  /**
   * Determines the visual variant of the component.
   * Defaults to `default` if not specified.
   */
  variant?: TPackageCardVariant;
}
