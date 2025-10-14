"use client";

import { cn } from "@/utils/classes";
import { Slot } from "@radix-ui/react-slot";
import type { IContainer } from "./Container.types";

const styles = {
  sm: {
    block: "block",
    flex: "flex",
    grid: "grid grid-cols-4 gap-x-5",
  },
  md: {
    block: "md:block",
    flex: "md:flex",
    grid: "md:grid md:grid-cols-12 md:gap-x-10",
  },
  lg: {
    block: "lg:block",
    flex: "lg:flex",
    grid: "lg:grid lg:grid-cols-12 lg:gap-x-10",
  },
  xl: {
    block: "xl:block",
    flex: "xl:flex",
    grid: "xl:grid xl:grid-cols-12 xl:gap-x-10",
  },
};

export const Container = ({
  asChild,
  className,
  displays = { sm: "block" },
  noPadding = false,
  ...props
}: IContainer) => {
  const Comp = asChild ? Slot : "div";

  const classNames = cn(
    "relative w-full",
    !noPadding && "px-5 md:px-8 lg:px-10 xl:px-20",
    displays.sm && styles.sm[displays.sm],
    displays.md && styles.md[displays.md],
    displays.lg && styles.lg[displays.lg],
    displays.xl && styles.xl[displays.xl],
    className,
  );

  return <Comp className={classNames} {...props} />;
};
