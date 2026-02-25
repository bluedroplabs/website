import type { HTMLAttributes } from "react";
import type { IMetric } from "../Metric/Metric.types";

/**
 * Props for the Metrics component.
 */
export interface IMetrics extends HTMLAttributes<HTMLElement> {
  /**
   * Optional section title (e.g. "KEY HIGHLIGHTS").
   */
  title?: string;

  /**
   * Array of metrics to display.
   */
  metrics: IMetric[];
}
