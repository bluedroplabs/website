import type { HTMLAttributes } from "react";

/**
 * Props for the Metric component.
 */
export interface IMetric extends HTMLAttributes<HTMLElement> {
  /**
   * Short description text displayed within or alongside the component.
   */
  description: string;

  /**
   * The main value or statistic to be displayed by the Metric component.
   */
  value: string;
}
