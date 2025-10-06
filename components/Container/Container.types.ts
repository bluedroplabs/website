import type { TBreakpointSize } from "@/types/global.types";
import type { HTMLAttributes, ReactNode } from "react";

/**
 * Possible display types for the container at a given breakpoint.
 * - "block": Container behaves as a block element.
 * - "flex": Container uses flexbox layout.
 * - "grid": Container uses CSS grid layout.
 */
export type TContainerDisplay = "flex" | "grid" | "block";

/**
 * Defines responsive display settings for the container.
 *
 * Keys are breakpoint sizes (e.g., "sm" | "md" | "lg"),
 * and values are the chosen display type for that breakpoint.
 *
 * Since this is a Partial type, any breakpoint may be omitted.
 * Missing values default to "block".
 */
export type TContainerDisplays = Partial<
  Record<TBreakpointSize, TContainerDisplay>
>;

/**
 * Props for the Container component.
 */
export interface IContainer extends HTMLAttributes<HTMLDivElement> {
  /**
   * If true, uses a Slot component to allow rendering as a different HTML element or custom component.
   */
  asChild?: boolean;

  /**
   * Optional additional CSS classes for the container element.
   * Merged with the default responsive layout classes.
   */
  className?: string;

  /**
   * Content to be rendered inside the container.
   */
  children: ReactNode;

  /**
   * Flag to remove padding of the root element
   */
  noPadding?: boolean;

  /**
   * Responsive display configuration for the container.
   * - Allows specifying different layouts ("block", "flex", "grid") per breakpoint.
   * - If omitted, defaults to "block" for all breakpoints.
   */
  displays?: TContainerDisplays;
}
