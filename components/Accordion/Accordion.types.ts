import type * as AccordionPrimitive from "@radix-ui/react-accordion";
import type { ComponentProps } from "react";

/**
 * Props for the Accordion root component.
 */
export type IAccordion = ComponentProps<typeof AccordionPrimitive.Root>;

/**
 * Props for the AccordionItem component.
 */
export type IAccordionItem = ComponentProps<typeof AccordionPrimitive.Item>;

/**
 * Props for the AccordionTrigger component.
 */
export type IAccordionTrigger = ComponentProps<
  typeof AccordionPrimitive.Trigger
>;

/**
 * Props for the AccordionContent component.
 */
export type IAccordionContent = ComponentProps<
  typeof AccordionPrimitive.Content
>;
