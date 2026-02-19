import type * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import type { ComponentProps } from "react";

/**
 * Props for the ScrollArea component.
 */
export interface IScrollArea extends ComponentProps<
  typeof ScrollAreaPrimitive.Root
> {
  showEdgeShadows?: boolean;
}
