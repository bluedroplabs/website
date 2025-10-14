"use client";

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
    <div className="lg:border-t lg:border-border-normal lg:flex lg:px-10 xl:px-20">
      {solutions.map((solution, index) => (
        <SolutionCard
          key={index}
          {...solution}
          className="lg:flex-1 lg:border-x lg:border-border-normal lg:[&:nth-child(2)]:border-l-0"
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
    // Only process even indices
    if (index % 3 === 0 && index + 1 < solutions.length) {
      // Add a pair
      formattedSolutionsSet.push([solutions[index], solutions[index + 1]]);
    } else if (
      index % 3 === 2 ||
      (index === solutions.length - 1 && solutions.length % 3 !== 0)
    ) {
      // Add a single
      formattedSolutionsSet.push([{ ...solution, variant: "full" }]);
    }
  });

  return (
    <Container className={className} noPadding {...props}>
      <ContentBlock
        className="gap-y-4 py-12 px-5 md:px-8 lg:pb-12.5 lg:pt-25 lg:px-10 xl:px-20"
        description={description}
        primaryCTA={primaryCTA}
        primaryCTAClassName="mt-6"
        title={title}
        variant="inline"
      />
      <div className="grid">
        {formattedSolutionsSet.map((solutions, index) => (
          <FeaturedSolutionsGridRow key={index} solutions={solutions} />
        ))}
      </div>
    </Container>
  );
};
