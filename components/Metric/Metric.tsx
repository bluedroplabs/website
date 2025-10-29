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
    <div className={cn("leading-[1.1] space-y-2.5", className)} {...props}>
      <p className="text-size-32 lg:text-size-40">{value}</p>
      <p className="font-mono uppercase">{description}</p>
    </div>
  );
};
