"use client";

import { cn } from "@/utils";
import type { IMetric } from "./Metric.types";

export const Metric = ({
  className,
  description,
  value,
  ...props
}: IMetric) => {
  return (
    <div
      {...props}
      className={cn(
        "leading-[1.1] min-w-53.25 space-y-2.5 flex flex-row justify-center border-b border-border-normal pb-6",
        className,
      )}
    >
      <div className="text-size-20 flex-1 font-medium">{value}</div>
      <div className="metric-description flex-1">{description}</div>
    </div>
  );
};
