import type { HTMLAttributes } from "react";
import type { IMetric } from "../Metric/Metric.types";

/**
 * Props for the Metric component.
 */
export interface IMetrics extends HTMLAttributes<HTMLElement> {
  /**
   * Array of metrics to display.
   */
  metrics: IMetric[];
}
