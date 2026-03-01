"use client";

import { Container } from "@/components/Container/Container";
import { ContentBlock } from "@/components/ContentBlock/ContentBlock";
import { IconCard } from "@/components/IconCard/IconCard";
import { cn } from "@/utils";
import type { IFeaturedIconListGrid } from "./FeaturedIconListGrid.types";

const MOBILE_COLS = 2;
const LG_COLS = 3;

function getGridItemClasses(index: number, total: number): string {
  const lastRowStartMobile =
    total > 0 ? Math.floor((total - 1) / MOBILE_COLS) * MOBILE_COLS : 0;
  const lastRowStartLg =
    total > 0 ? Math.floor((total - 1) / LG_COLS) * LG_COLS : 0;

  const isLastColMobile = index % MOBILE_COLS === MOBILE_COLS - 1;
  const isLastColLg = index % LG_COLS === LG_COLS - 1;
  const isLastRowMobile = index >= lastRowStartMobile;
  const isLastRowLg = index >= lastRowStartLg;
  const isSingleItemInLastMobileRow =
    total % MOBILE_COLS === 1 && index === total - 1;

  return cn(
    "border-border-normal border-r px-5 py-8 lg:p-10 border-b",
    isSingleItemInLastMobileRow && "col-span-2 lg:col-span-1",
    isLastColLg && "lg:border-r-0",
    isLastColMobile && "max-lg:border-r-0",
    isLastRowMobile && "max-lg:border-b-0",
    isLastRowLg && "lg:border-b-0",
  );
}

export const FeaturedIconListGrid = ({
  className,
  eyebrow,
  title,
  description,
  items = [],
  variant = "inline",
}: IFeaturedIconListGrid) => {
  const hasItems = items.length > 0;

  return (
    <section className={cn("border-t border-border-normal", className)}>
      <div className="border-b border-border-normal">
        <div className="max-w-[var(--breakpoint-2xl)] mx-auto px-5 md:px-8 lg:px-10 xl:px-20 2xl:px-0">
          <div className="2xl:border-x border-border-normal">
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
                variant={variant}
              />
            </Container>
          </div>
        </div>
      </div>

      <div className="max-w-[var(--breakpoint-2xl)] mx-auto px-5 md:px-8 lg:px-10 xl:px-20 3xl:px-0">
        {hasItems && (
          <div className="border-x border-border-normal">
            <div className="grid grid-cols-2 lg:grid-cols-3">
              {items.map((item, index) => (
                <div
                  className={getGridItemClasses(index, items.length)}
                  key={index}
                >
                  <IconCard {...item} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
