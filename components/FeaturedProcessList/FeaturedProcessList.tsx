"use client";

import { Container } from "@/components/Container/Container";
import { cn } from "@/utils/classes";
import { ContentBlock } from "../ContentBlock/ContentBlock";
import type { IFeaturedProcessList } from "./FeaturedProcessList.types";

export const FeaturedProcessList = ({
  className,
  description,
  items,
  title,
  ...props
}: IFeaturedProcessList) => {
  const hasHeader = Boolean(title || description);

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
            className="flex flex-col gap-4 py-12 lg:pb-12 lg:pt-25 lg:px-16"
            description={description}
            title={title}
          />
        </div>
      )}

      <ol className="w-full border-t border-border-normal">
        {items.map((item, index) => (
          <li
            key={index}
            className={cn(
              "max-w-[var(--breakpoint-2xl)] mx-auto",
              "flex flex-col lg:flex-row gap-6 lg:gap-10",
              "border-x border-border-normal",
              "px-6 py-10 lg:px-16 lg:py-12",
              index > 0 && "border-t",
            )}
          >
            <div className="flex flex-col gap-3 shrink-0 lg:flex-row lg:items-start lg:w-[462px]">
              <span className="font-mono font-medium text-size-16 text-default-highlight leading-none uppercase whitespace-nowrap lg:mt-2">
                [{index + 1}]
              </span>
              <h3 className="font-medium text-size-28 leading-[1.15] tracking-[-0.02em] text-default-heading lg:text-size-32 lg:leading-[1.25]">
                {item.title}
              </h3>
            </div>
            <p className="font-light text-size-18 leading-[1.5] text-default-base lg:flex-1 lg:pt-2">
              {item.description}
            </p>
          </li>
        ))}
      </ol>
    </Container>
  );
};
