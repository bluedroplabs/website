"use client";

import { cn } from "@/utils/classes";
import type { HTMLAttributes } from "react";

const styles = {
  container: "w-screen bg-dotted",
};

export const DottedBackground = ({
  className,
  ...props
}: HTMLAttributes<HTMLElement>) => (
  <div className={cn(styles.container, className)} {...props} />
);
