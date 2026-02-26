"use client";

import { cn } from "@/utils/classes";
import { Slot } from "@radix-ui/react-slot";
import { CONTAINER_PADDING } from "./Container.constants";
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
  "2xl": {
    block: "2xl:block",
    flex: "2xl:flex",
    grid: "2xl:grid 2xl:grid-cols-12 2xl:gap-x-10",
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

  // Form-only props are only valid on <input> or <button>; strip when spreading onto div/Slot
  const FORM_ONLY_KEYS = [
    "formAction",
    "formMethod",
    "formEncType",
    "formTarget",
  ] as const;
  const restProps = Object.fromEntries(
    Object.entries(props).filter(
      ([key]) =>
        !FORM_ONLY_KEYS.includes(key as (typeof FORM_ONLY_KEYS)[number]),
    ),
  );

  const classNames = cn(
    "relative w-full max-w-540 mx-auto",
    !noPadding && CONTAINER_PADDING,
    displays.sm && styles.sm[displays.sm],
    displays.md && styles.md[displays.md],
    displays.lg && styles.lg[displays.lg],
    displays.xl && styles.xl[displays.xl],
    className,
  );

  return <Comp className={classNames} {...restProps} />;
};
