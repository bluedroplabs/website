"use client";

import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

import { cn } from "@/utils";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ComponentProps,
} from "react";
import type { IScrollArea } from "./ScrollArea.types";

const styles = {
  root: "relative",
  scrollbarBase: "flex touch-none p-px transition-colors select-none",
  scrollbarHorizontal: "h-2.5 flex-col border-t border-t-transparent",
  scrollbarVertical: "h-full w-1.5 border-l border-l-transparent",
  shadow: "pointer-none absolute bottom-0 top-0 z-10 w-3.25",
  thumb: "bg-border-light relative flex-1 rounded-full",
  viewport:
    "size-full rounded-[inherit] outline-none transition-[color,box-shadow] focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50",
} as const;

const ScrollArea = ({
  className,
  children,
  showEdgeShadows = true,
  ...props
}: IScrollArea) => {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateShadows = useCallback(() => {
    const el = viewportRef.current;
    if (!el) return;
    const { scrollLeft, clientWidth, scrollWidth } = el;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  }, []);

  useEffect(() => {
    if (!showEdgeShadows) return;
    const el = viewportRef.current;
    if (!el) return;

    updateShadows();

    const onScroll = () => updateShadows();
    el.addEventListener("scroll", onScroll, { passive: true });

    const ro = new ResizeObserver(() => updateShadows());
    ro.observe(el);
    if (el.firstElementChild) ro.observe(el.firstElementChild as Element);

    const onWindowResize = () => updateShadows();
    window.addEventListener("resize", onWindowResize);

    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onWindowResize);
      ro.disconnect();
    };
  }, [showEdgeShadows, updateShadows]);

  return (
    <ScrollAreaPrimitive.Root
      className={cn(styles.root, className)}
      data-slot="scroll-area"
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        className={styles.viewport}
        data-slot="scroll-area-viewport"
        ref={viewportRef}
      >
        {children}
      </ScrollAreaPrimitive.Viewport>

      {showEdgeShadows && canScrollLeft && (
        <div
          aria-hidden
          className={cn("left-0", styles.shadow)}
          data-slot="scroll-area-shadow-left"
          style={{
            background:
              "linear-gradient(90deg, rgba(17, 17, 17, 0.3) 0%, rgba(17, 17, 17, 0) 100%)",
            opacity: 0.5,
            filter: "blur(2px)",
          }}
        />
      )}

      {showEdgeShadows && canScrollRight && (
        <div
          aria-hidden
          className={cn("right-0", styles.shadow)}
          data-slot="scroll-area-shadow-right"
          style={{
            background:
              "linear-gradient(270deg, rgba(17, 17, 17, 0.3) 0%, rgba(17, 17, 17, 0) 100%)",
            opacity: 0.5,
            filter: "blur(2px)",
          }}
        />
      )}
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
};

const ScrollBar = ({
  className,
  orientation = "vertical",
  ...props
}: ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>) => {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      className={cn(
        styles.scrollbarBase,
        orientation === "vertical" && styles.scrollbarVertical,
        orientation === "horizontal" && styles.scrollbarHorizontal,
        className,
      )}
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        className={styles.thumb}
        data-slot="scroll-area-thumb"
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  );
};

export { ScrollArea, ScrollBar };
