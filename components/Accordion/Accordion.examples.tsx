import { AccordionContent, AccordionItem, AccordionTrigger } from "./Accordion";
import type { IAccordionProps } from "./Accordion.types";

const ACCORDION_DEFAULT_PROPS: IAccordionProps = {
  type: "single",
  collapsible: true,
  children: (
    <AccordionItem
      className="border-t border-normal text-size-20"
      value="item-1"
    >
      <AccordionTrigger className="py-6 font-semibold">
        We&apos;re available when you need us
      </AccordionTrigger>
      <AccordionContent className="pb-8">
        <ul className="pt-3 space-y-4">
          <li className="flex items-center pl-6.25 relative before:absolute before:size-2.25 before:bg-brand-aqua before:left-0">
            Direct Slack access to our technical team
          </li>
          <li className="flex items-center pl-6.25 relative before:absolute before:size-2.25 before:bg-brand-aqua before:left-0">
            Quick response times, not days or weeks
          </li>
          <li className="flex items-center pl-6.25 relative before:absolute before:size-2.25 before:bg-brand-aqua before:left-0">
            No barriers between you and the people working on your solutions
          </li>
        </ul>
      </AccordionContent>
    </AccordionItem>
  ),
};

export const ACCORDION_EXAMPLE_PROPS = {
  default: ACCORDION_DEFAULT_PROPS,
};
