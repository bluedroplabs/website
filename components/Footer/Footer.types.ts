import type { ICTA } from "@/types/cta.types";
import type { IImage } from "@/types/image.types";
import type { INavigationItem } from "@/types/navigation";
import type { HTMLAttributes } from "react";

/**
 * Props for the Footer component.
 */
export interface IFooter extends HTMLAttributes<HTMLElement> {
  /**
   * Copyright notice or legal information.
   */
  copyright: string;

  /**
   * Dark mode logo image.
   */
  darkLogo?: IImage;

  /**
   * Main description/tagline text.
   */
  description: string;

  /**
   * Form action URL.
   */
  formAction: string;

  /**
   * Form description text.
   */
  formDescription: string;

  /**
   * Form section heading.
   */
  formHeading: string;

  /**
   * Logo image displayed at the top of the footer.
   */
  logo: IImage;

  /**
   * Primary navigation links.
   */
  primaryLinks: INavigationItem[];

  /**
   * Secondary text line (e.g., tagline, motto, etc.).
   */
  secondaryText: string;

  /**
   * Utility/footer links (legal, policy, etc.).
   */
  utilityLinks: ICTA[];
}
