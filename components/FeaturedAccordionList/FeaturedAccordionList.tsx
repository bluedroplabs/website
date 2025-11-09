"use client";

import { Container } from "@/components/Container/Container";
import { cn } from "@/utils/classes";
import parse from "html-react-parser";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../Accordion/Accordion";
import { ContentBlock } from "../ContentBlock/ContentBlock";
import type { IFeaturedAccordionList } from "./FeaturedAccordionList.types";

export const FeaturedAccordionList = ({
  className,
  description,
  items,
  title,
  ...props
}: IFeaturedAccordionList) => {
  if (!items || items.length === 0) return;

  const filteredItems = items.filter(
    (item) => typeof item.content === "string" && item.content.trim() !== "",
  );

  return (
    <Container
      className={cn(
        "border-t border-border-normal py-14 lg:gap-x-10 lg:py-20",
        className,
      )}
      displays={{ lg: "flex" }}
      {...props}
    >
      <ContentBlock
        className="lg:basis-1/2"
        description={description}
        descriptionClassName="mt-5"
        title={title}
      />
      <Accordion
        className="max-lg:mt-10 lg:basis-1/2"
        collapsible
        type="single"
      >
        {filteredItems.map((item, index) => (
          <AccordionItem
            className="border-t border-border-normal leading-[1.25] text-size-20"
            key={index}
            value={index.toString()}
          >
            <AccordionTrigger className="py-6 font-semibold">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="pb-8">
              {parse(item.content)}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
};
