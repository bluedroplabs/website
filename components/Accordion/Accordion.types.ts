import type * as AccordionPrimitive from "@radix-ui/react-accordion";
import type * as React from "react";

/**
 * Props for the Accordion root component.
 */
export type IAccordionProps = React.ComponentProps<
  typeof AccordionPrimitive.Root
>;

/**
 * Props for the AccordionItem component.
 */
export type IAccordionItemProps = React.ComponentProps<
  typeof AccordionPrimitive.Item
>;

/**
 * Props for the AccordionTrigger component.
 */
export type IAccordionTriggerProps = React.ComponentProps<
  typeof AccordionPrimitive.Trigger
>;

/**
 * Props for the AccordionContent component.
 */
export type IAccordionContentProps = React.ComponentProps<
  typeof AccordionPrimitive.Content
>;
