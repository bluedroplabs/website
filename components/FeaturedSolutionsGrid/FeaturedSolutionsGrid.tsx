"use client";

import { cn } from "@/utils";
import { Container } from "@/components/Container/Container";
import { ContentBlock } from "../ContentBlock/ContentBlock";
import { SolutionCard } from "../SolutionCard/SolutionCard";
import type { ISolutionCard } from "../SolutionCard/SolutionCard.types";
import type { IFeaturedSolutionsGrid } from "./FeaturedSolutionsGrid.types";

const FeaturedSolutionsGridRow = ({
  solutions,
}: {
  solutions: ISolutionCard[];
}) => {
  return (
    <div className="flex flex-col border-t border-border-normal lg:flex-row lg:px-10 xl:px-20">
      {solutions.map((solution, index) => (
        <SolutionCard
          key={index}
          {...solution}
          className="w-full border-x border-border-normal lg:flex-1 [&:nth-child(2)]:border-l-0"
        />
      ))}
    </div>
  );
};

export const FeaturedSolutionsGrid = ({
  className,
  description,
  primaryCTA,
  solutions,
  title,
  ...props
}: IFeaturedSolutionsGrid) => {
  const formattedSolutionsSet: ISolutionCard[][] = [];

  solutions.forEach((solution, index) => {
    if (index % 3 === 0 && index + 1 < solutions.length) {
      formattedSolutionsSet.push([solutions[index], solutions[index + 1]]);
    } else if (
      index % 3 === 2 ||
      (index === solutions.length - 1 && solutions.length % 3 !== 0)
    ) {
      formattedSolutionsSet.push([{ ...solution, variant: "full" }]);
    }
  });

  return (
    <Container
      className={cn(
        "border-y border-border-normal bg-page-default",
        className,
      )}
      noPadding
      {...props}
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-8 lg:px-10 xl:px-20">
        <ContentBlock
          className="flex flex-col gap-6 py-12 lg:flex-row lg:items-start lg:pb-12 lg:pt-25"
          description={description}
          primaryCTA={primaryCTA}
          primaryCTAClassName="mt-0"
          title={title}
          variant="inline"
        />
      </div>
      <div className="grid">
        {formattedSolutionsSet.map((solutions, index) => (
          <FeaturedSolutionsGridRow key={index} solutions={solutions} />
        ))}
      </div>
    </Container>
  );
};
