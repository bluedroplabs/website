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
   */
  description?: string;

  /**
   * Title text displayed prominently in the component.
   */
  features: IList["items"];

  /**
   * Determines the visual variant of the component.
   * Defaults to `default` if not specified.
   */
  variant?: TPackageCardVariant;
}
