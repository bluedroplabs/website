"use client";

import { Container } from "@/components/Container/Container";
import { cn } from "@/utils";
import { CONTAINER_PADDING } from "../Container/Container.constants";
import { ContentBlock } from "../ContentBlock/ContentBlock";
import { IconCard } from "../IconCard/IconCard";
import type { IFeaturedIconListGrid } from "./FeaturedIconListGrid.types";

const styles = {
  contentBlock: cn(
    "pb-8 pt-14 lg:border-x lg:border-border-normal lg:pb-12 lg:pt-25",
    CONTAINER_PADDING,
  ),
  description: "mt-5 [&_strong]:font-medium",
  eyebrow: "mb-5 lg:mb-4",
  list: cn(
    "grid grid-cols-2 lg:grid-cols-3 overflow-hidden group",
    CONTAINER_PADDING,
  ),
  listItem: cn(
    "border-l border-border-normal px-5 py-8 relative lg:p-10",
    "max-lg:[&:nth-child(even)]:border-r lg:[&:nth-child(3n+3)]:border-r",
    "after:absolute after:left-0 after:bottom-0 after:bg-border-normal",
    "before:absolute before:left-0 before:top-0 before:bg-border-normal",
    "max-lg:[&:nth-child(odd)]:before:h-px max-lg:[&:nth-child(odd)]:before:w-screen",
    "max-md:[&:nth-child(odd)]:before:-left-5 max-lg:[&:nth-child(odd)]:before:-left-8",
    "max-lg:[&:nth-last-child(2)]:after:h-px max-lg:[&:nth-last-child(2)]:after:w-screen",
    "max-md:[&:nth-last-child(2)]:after:-left-5 max-lg:[&:nth-last-child(2)]:after:-left-8",
    "max-lg:group-has-[[data-last-full-width]]:[&:nth-last-child(2)]:[&::after]:hidden",
    "max-lg:group-has-[[data-last-full-width]]:[&:nth-last-child(3)]:[&::after]:hidden",
    "lg:[&:nth-last-child(3)]:after:h-px lg:[&:nth-last-child(3)]:after:w-screen",
    "lg:[&:nth-last-child(3)]:after:-left-10 xl:[&:nth-last-child(3)]:after:-left-20",
    "lg:[&:nth-child(3n+1)]:before:h-px lg:[&:nth-child(3n+1)]:before:w-screen",
    "lg:[&:nth-child(3n+1)]:before:-left-10 xl:[&:nth-child(3n+1)]:before:-left-20",
  ),
  lastItemFullWidth: cn(
    "max-lg:col-span-2 max-lg:border-r max-lg:border-border-normal max-lg:border-l",
    "max-lg:after:h-px max-lg:after:w-screen max-md:after:-left-5 max-lg:after:-left-8",
  ),
};

export const FeaturedIconListGrid = ({
  className,
  description,
  eyebrow,
  items,
  title,
  variant = "inline",
  ...props
}: IFeaturedIconListGrid) => {
  if (!items || items.length === 0) return null;

  const formattedItems = [...items];

  while (formattedItems.length % 3 !== 0) {
    formattedItems.push({} as (typeof items)[number]);
  }

  return (
    <Container
      className={cn(
        "border-t border-border-normal max-w-[var(--breakpoint-2xl)] mx-auto",
        className,
      )}
      noPadding
      {...props}
    >
      <ContentBlock
        className={styles.contentBlock}
        description={description}
        descriptionClassName={styles.description}
        eyebrow={eyebrow}
        eyebrowClassName={styles.eyebrow}
        eyebrowVariant="highlight"
        title={title}
        variant={variant}
      />
      <ul className={styles.list}>
        {formattedItems.map((item, index) => {
          const isLastRealItem = index === items.length - 1;
          const isLastItemFullWidth = isLastRealItem && items.length % 2 === 1;
          return (
            <li
              aria-hidden={!item.icon}
              className={cn(
                styles.listItem,
                isLastItemFullWidth && styles.lastItemFullWidth,
              )}
              data-last-full-width={isLastItemFullWidth ? "" : undefined}
              key={index}
            >
              <IconCard {...item} />
            </li>
          );
        })}
      </ul>
    </Container>
  );
};
