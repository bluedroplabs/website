"use client";

import { Container } from "@/components/Container/Container";
import { ContentBlock } from "@/components/ContentBlock/ContentBlock";
import { IconCard } from "@/components/IconCard/IconCard";
import { cn } from "@/utils";
import type { IFeaturedIconListGrid } from "./FeaturedIconListGrid.types";

export const FeaturedIconListGrid = ({
  className,
  eyebrow,
  title,
  description,
  items = [],
}: IFeaturedIconListGrid) => {
  const hasItems = items.length > 0;

  return (
    <section className={cn("border-t border-border-normal", className)}>
      <div className="max-w-[var(--breakpoint-2xl)] mx-auto px-5 md:px-8 lg:px-10 xl:px-20 3xl:px-0">
        <div className="border-x border-border-normal">
          <Container
            className="py-16 lg:py-24 px-5 md:px-8 lg:px-10 xl:px-20"
            noPadding
          >
            <ContentBlock
              description={description}
              descriptionClassName="mt-5 text-fg-muted max-w-154.5"
              eyebrow={eyebrow}
              eyebrowClassName="mb-4"
              eyebrowVariant="highlight"
              title={title}
              titleClassName="font-light leading-tight"
              titleVariant="lg"
              variant="inline"
            />
          </Container>
        </div>

        {hasItems && (
          <div className="border-l border-border-normal border-t">
            <div className="grid grid-cols-2 lg:grid-cols-3">
              {items.map((item, index) => {
                const lastRowStartIndex =
                  items.length > 0 ? Math.floor((items.length - 1) / 3) * 3 : 0;
                const isInLastRow = index >= lastRowStartIndex;
                const isLastItem = index === items.length - 1;
                const isSingleItemInLastMobileRow =
                  items.length % 2 === 1 && isLastItem;

                return (
                  <div
                    className={cn(
                      "border-border-normal border-r p-6 lg:p-10",
                      isSingleItemInLastMobileRow &&
                        "col-span-2 lg:col-span-1 border-t border-border-normal",
                      !isInLastRow && "border-b",
                    )}
                    key={index}
                  >
                    <IconCard {...item} />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
