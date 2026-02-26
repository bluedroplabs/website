"use client";

import { Container } from "@/components/Container/Container";
import { cn } from "@/utils/classes";
import { ContentBlock } from "../ContentBlock/ContentBlock";
import { IconCard } from "../IconCard/IconCard";
import type { IFeaturedIconList } from "./FeaturedIconList.types";

const styles = {
  container: "",
};

export const FeaturedIconList = ({
  className,
  items,
  title,
  ...props
}: IFeaturedIconList) => {
  if (!items || items.length === 0) return null;

  return (
    <section className="border-t border-t-border-normal">
      <Container className={cn(styles.container, className)} {...props}>
        <div className="grid gap-y-8 py-12 md:border-x md:border-border-normal lg:flex lg:py-20">
          <ContentBlock
            className="md:pl-8 lg:basis-1/2 lg:pl-16"
            title={title}
            titleClassName="font-medium leading-[1.25] tracking-tighter"
            titleVariant="xl"
          />
          <ul className="grid gap-y-6 md:px-8 lg:basis-1/2 lg:gap-y-8 lg:px-10">
            {items.map((item, index) => (
              <li key={index}>
                <IconCard {...item} variant="inline" />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};
