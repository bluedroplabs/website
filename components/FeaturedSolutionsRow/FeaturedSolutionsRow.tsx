"use client";

import { Container } from "@/components/Container/Container";
import { useAppTheme } from "@/hooks/useAppTheme";
import { cn } from "@/utils/classes";
import Image from "next/image";
import Link from "next/link";
import { ContentBlock } from "../ContentBlock/ContentBlock";
import type { ISolutionCard } from "../SolutionCard/SolutionCard.types";
import type { IFeaturedSolutionsRow } from "./FeaturedSolutionsRow.types";

function FeaturedSolutionsRowCard({
  description,
  image,
  title,
}: ISolutionCard) {
  const { isDarkMode } = useAppTheme();
  const src = isDarkMode && image.srcDark ? image.srcDark : image.src;
  const { srcDark: _srcDark, srcLight: _srcLight, ...imageProps } = image;

  return (
    <article className="flex flex-col h-full min-w-0 pt-12 px-6 lg:pt-16 lg:px-16">
      <div className="flex flex-col gap-4 pb-8">
        <h3 className="font-medium leading-[1.1] text-default-heading text-size-32 tracking-[-0.02em]">
          {title}
        </h3>
        <p className="font-light leading-[1.5] text-default-base text-size-18">
          {description}
        </p>
      </div>
      <figure className="aspect-[512/260] mt-auto relative w-full">
        <Image
          {...imageProps}
          className="object-cover"
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          src={src}
        />
      </figure>
    </article>
  );
}

export const FeaturedSolutionsRow = ({
  className,
  description,
  eyebrow,
  primaryCTA,
  solutions,
  title,
  ...props
}: IFeaturedSolutionsRow) => {
  const hasHeader = Boolean(title || description || eyebrow);

  return (
    <Container
      className={cn(
        "border-y border-border-normal bg-page-default mx-auto",
        className,
      )}
      noPadding
      {...props}
    >
      {hasHeader && (
        <div className="mx-auto max-w-[var(--breakpoint-2xl)] px-6 2xl:px-16 3xl:px-0">
          <ContentBlock
            className="gap-4 py-12 lg:gap-5 lg:pb-12 lg:pt-25 lg:px-16"
            description={description}
            eyebrow={eyebrow}
            eyebrowVariant="highlight"
            primaryCTA={primaryCTA}
            primaryCTAClassName="mt-2"
            title={title}
            variant="center"
          />
        </div>
      )}

      <div
        className={cn(
          "w-full border-border-normal",
          hasHeader && "lg:border-t",
        )}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 max-w-[var(--breakpoint-2xl)] mx-auto">
          {solutions.map((solution, index) => {
            const isLast = index === solutions.length - 1;
            const borderClasses = cn(
              "border-x border-border-normal max-lg:border-b lg:border-r-0",
              isLast && "lg:border-r",
            );

            if (solution.href) {
              return (
                <Link
                  className={cn("min-w-0", borderClasses)}
                  href={solution.href}
                  key={index}
                >
                  <FeaturedSolutionsRowCard {...solution} />
                </Link>
              );
            }

            return (
              <div className={cn("min-w-0", borderClasses)} key={index}>
                <FeaturedSolutionsRowCard {...solution} />
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};
