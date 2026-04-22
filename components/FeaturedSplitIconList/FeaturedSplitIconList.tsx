"use client";

import { Container } from "@/components/Container/Container";
import { IconCard } from "@/components/IconCard/IconCard";
import { cn } from "@/utils/classes";
import type { IFeaturedSplitIconList } from "./FeaturedSplitIconList.types";

export const FeaturedSplitIconList = ({
  className,
  items,
  title,
  ...props
}: IFeaturedSplitIconList) => {
  if (!items?.length) return null;

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
        <div className="grid grid-cols-1 gap-10 px-6 py-12 lg:grid-cols-2 lg:gap-16 lg:px-16 lg:py-20">
          <h2 className="font-medium text-size-32 lg:text-size-40 leading-[1.25] tracking-[-0.02em] text-default-heading">
            {title}
          </h2>
          <ul className="flex flex-col gap-8 lg:pl-10">
            {items.map((item, index) => (
              <li key={index}>
                <IconCard {...item} variant="inline" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
};
