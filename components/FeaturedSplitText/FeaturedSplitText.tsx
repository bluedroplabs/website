"use client";

import { Container } from "@/components/Container/Container";
import { cn } from "@/utils/classes";
import type { IFeaturedSplitText } from "./FeaturedSplitText.types";

export const FeaturedSplitText = ({
  className,
  description,
  title,
  ...props
}: IFeaturedSplitText) => {
  return (
    <Container
      className={cn(
        "border-t border-border-normal bg-page-default mx-auto",
        className,
      )}
      noPadding
      {...props}
    >
      <div className="max-w-[var(--breakpoint-2xl)] mx-auto border-x border-border-normal">
        <div className="grid grid-cols-1 gap-6 px-6 py-12 lg:grid-cols-2 lg:gap-16 lg:px-16 lg:py-20">
          <h2 className="font-medium text-size-32 lg:text-size-40 leading-[1.1] tracking-[-0.02em] text-default-heading">
            {title}
          </h2>
          <p className="font-light text-size-18 lg:text-size-24 leading-[1.5] text-default-base">
            {description}
          </p>
        </div>
      </div>
    </Container>
  );
};
