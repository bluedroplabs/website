"use client";

import { cn } from "@/utils/classes";
import type { HTMLAttributes } from "react";

export const GridSeparator = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "bg-grid-lines bg-repeat-x bg-size-[5rem_5rem] border-y border-border-light bg-center w-screen -left-[calc((100vw-100%)/2)] relative h-18 lg:h-20 [&+*]:border-y-0",
        className,
      )}
      {...props}
    />
  );
};
