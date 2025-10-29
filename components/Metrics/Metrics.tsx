"use client";

import { cn } from "@/utils";
import { Metric } from "../Metric/Metric";
import type { IMetrics } from "./Metrics.types";

export const Metrics = ({ className, metrics, ...props }: IMetrics) => {
  if (!metrics || metrics.length === 0) return null;

  return (
    <div
      className={cn(
        "flex gap-x-6 gap-y-8 justify-between w-full max-md:flex-wrap",
        className,
      )}
      {...props}
    >
      {metrics.map((metric, index) => (
        <Metric
          {...metric}
          className="max-md:basis-[calc(50%-0.75rem)]"
          key={index}
        />
      ))}
    </div>
  );
};
