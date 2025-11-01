import type { IMetrics } from "./Metrics.types";

const METRICS_DEFAULT_PROPS: IMetrics = {
  className: "max-w-180 mx-auto",
  metrics: [
    {
      value: "200%",
      description: "growth",
    },
    {
      value: "$700k",
      description: "in revenue",
    },
    {
      value: "500+",
      description: "clients globally",
    },
  ],
};

export const METRICS_EXAMPLE_PROPS = {
  default: METRICS_DEFAULT_PROPS,
};
