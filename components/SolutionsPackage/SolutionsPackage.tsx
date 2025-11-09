"use client";

import { Container } from "@/components/Container/Container";
import { cn } from "@/utils/classes";
import { ContentBlock } from "../ContentBlock/ContentBlock";
import { FeaturedTextList } from "../FeaturedTextList/FeaturedTextList";
import { PackageCard } from "../PackageCard/PackageCard";
import type { ISolutionsPackage } from "./SolutionsPackage.types";

export const SolutionsPackage = ({
  className,
  description,
  eyebrow,
  footer,
  packages,
  title,
  ...props
}: ISolutionsPackage) => {
  return (
    <Container className={cn("", className)} {...props} noPadding>
      <Container className="border-b border-border-normal">
        <ContentBlock
          className="mb-8 lg:mb-12"
          description={description}
          eyebrow={eyebrow}
          eyebrowClassName="mb-5"
          eyebrowVariant="highlight"
          title={title}
          titleClassName="mb-5 last:mb-0"
        />
      </Container>
      <Container className="border-b border-border-normal">
        <div className="border-x border-border-normal md:flex">
          {packages.map((solutionPackage, index) => (
            <PackageCard
              className={cn(
                "border-t border-border-normal md:basis-1/2",
                index === 0 && "border-r border-border-normal",
              )}
              key={index}
              {...solutionPackage}
            />
          ))}
        </div>
      </Container>
      <Container className="border-b border-border-normal">
        <FeaturedTextList
          {...footer}
          className="border-x border-border-normal max-lg:px-6 [&>div]:py-12"
          noPadding
        />
      </Container>
    </Container>
  );
};
