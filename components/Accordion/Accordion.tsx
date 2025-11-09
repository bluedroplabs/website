"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { cn } from "@/utils/classes";
import { PlusIcon } from "../Icon";
import type {
  IAccordion,
  IAccordionContent,
  IAccordionItem,
  IAccordionTrigger,
} from "./Accordion.types";

function Accordion({ ...props }: IAccordion) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({ className, ...props }: IAccordionItem) {
  return (
    <AccordionPrimitive.Item
      className={className}
      data-slot="accordion-item"
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: IAccordionTrigger) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn(
          "cursor-pointer focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md text-left transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-135",
          className,
        )}
        data-slot="accordion-trigger"
        {...props}
      >
        {children}
        <PlusIcon className="pointer-events-none size-6 shrink-0 translate-y-0.5 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: IAccordionContent) {
  return (
    <AccordionPrimitive.Content
      className="data-[state=closed]:animate-accordion-up data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden transition-all"
      data-slot="accordion-content"
      {...props}
    >
      <div className={className}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
