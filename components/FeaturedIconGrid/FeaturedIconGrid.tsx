"use client";

import { Container } from "@/components/Container/Container";
import { cn } from "@/utils/classes";
import { ContentBlock } from "../ContentBlock/ContentBlock";
import { IconCard } from "../IconCard/IconCard";
import type { IFeaturedIconGrid } from "./FeaturedIconGrid.types";

const contentMargin = "mt-4 lg:mt-5";

export const FeaturedIconGrid = ({
  className,
  description,
  eyebrow,
  items,
  title,
  ...props
}: IFeaturedIconGrid) => {
  if (!items || items.length === 0) return null;

  return (
    <Container
      className={cn("py-12 space-y-8 lg:py-20 lg:space-y-12", className)}
      displays={{ lg: "grid" }}
      {...props}
    >
      <ContentBlock
        className="lg:col-span-8"
        description={description}
        descriptionClassName={contentMargin}
        eyebrow={eyebrow}
        eyebrowVariant="highlight"
        title={title}
        titleClassName={contentMargin}
      />
      <Container
        asChild
        className="col-span-full justify-between max-lg:space-y-8 md:max-lg:flex-wrap md:max-lg:gap-x-5"
        displays={{ md: "flex", lg: "grid" }}
        noPadding
      >
        <ul>
          {items.map((item, index) => (
            <li
              className="md:basis-[calc(50%-0.625rem)] lg:col-span-3"
              key={index}
            >
              <IconCard {...item} />
            </li>
          ))}
        </ul>
      </Container>
    </Container>
  );
};
