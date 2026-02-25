"use client";

import { cn } from "@/utils";
import { Metric } from "../Metric/Metric";
import type { IMetrics } from "./Metrics.types";

export const Metrics = ({ className, metrics, title, ...props }: IMetrics) => {
  if (!metrics || metrics.length === 0) return null;

  return (
    <div
      className={cn(
        "flex flex-col lg:flex-wrap gap-x-6 gap-y-6 w-full max-md:flex-wrap",
        className,
      )}
      {...props}
    >
      {title ? (
        <div className="w-full pb-4 border-b border-border-normal">
          <p className="font-mono text-sm font-medium uppercase tracking-wide text-[var(--text-default-highlight,#007a9c)]">
            {title}
          </p>
        </div>
      ) : null}
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
