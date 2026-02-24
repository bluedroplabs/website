"use client";

import { useMemo } from "react";
import { Container } from "@/components/Container/Container";
import { cn } from "@/utils";
import { ResourceCard } from "../ResourceCard/ResourceCard";
import type { IRelatedPosts } from "./RelatedPosts.types";

function deterministicSample<T extends { href?: string }>(
  items: T[],
  count: number
): T[] {
  if (items.length <= count) return items;

  const sorted = [...items].sort((a, b) => {
    const hrefA = a.href ?? "";
    const hrefB = b.href ?? "";
    return hrefA.localeCompare(hrefB);
  });

  return sorted.slice(0, count);
}

export const RelatedPosts = ({
  className,
  items,
  title,
  ...props
}: IRelatedPosts) => {
  const displayItems = useMemo(
    () => deterministicSample(items, 3),
    [items]
  );

  return (
    <Container {...props} className={cn("mb-10", className)} noPadding>
      <Container className="border-b border-border-normal">
        <h2 className="border-x border-border-normal font-medium font-mono px-5 py-6 uppercase lg:px-8">
          {title}
        </h2>
      </Container>
      <Container
        className="border-b border-border-normal"
        displays={{ lg: "flex" }}
      >
        {displayItems.map((item, index) => (
          <Container
            className="border-border-normal last:border-b-0 max-lg:border-b lg:first:border-l lg:last:border-r"
            key={item.href ?? index}
            noPadding
          >
            <ResourceCard
              {...item}
              className="w-full max-lg:border-b max-lg:border-border-normal max-lg:last:border-b-0 md:max-lg:border-x"
            />
          </Container>
        ))}
      </Container>
    </Container>
  );
};
