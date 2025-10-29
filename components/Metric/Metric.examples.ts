import type { IMetric } from "./Metric.types";

const METRIC_DEFAULT_PROPS: IMetric = {
  description: "clients globally",
  value: "500+",
};

export const METRIC_EXAMPLE_PROPS = {
  default: METRIC_DEFAULT_PROPS,
};
