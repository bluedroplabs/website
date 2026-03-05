"use client";

import { cn } from "@/utils/classes";
import type { IHighlightsTable } from "./HighlightsTable.types";

export const HighlightsTable = ({
  className,
  highlights,
  title,
  ...props
}: IHighlightsTable) => {
  if (!highlights || highlights.length === 0) return null;

  return (
    <div className={cn("w-full", className)} {...props}>
      <h2 className="font-medium uppercase text-sm text-default-highlight mb-4">
        {title}
      </h2>
      <div>
        {highlights.map((highlight, index) => (
          <div
            className="border-t last:border-b border-border-light py-6 md:grid md:grid-cols-[18rem_1fr] md:gap-x-6"
            key={index}
          >
            <h3 className="font-medium text-xl leading-[1.25]">
              {highlight.title}
            </h3>
            <p className="leading-[1.5]">{highlight.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
