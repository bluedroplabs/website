"use client";

import { cn } from "@/utils";
import { cva } from "class-variance-authority";
import Image from "next/image";
import { ContentBlock } from "../ContentBlock/ContentBlock";
import type { ISolutionCard } from "./SolutionCard.types";

const variants = cva(
  "border-border-normal grid h-full max-lg:border-t pt-12 px-6 lg:px-16",
  {
    variants: {
      variant: {
        basic: "",
        full: "lg:flex lg:gap-16 lg:[&>*]:basis-1/2 lg:p-16",
      },
    },
    defaultVariants: { variant: "basic" },
  },
);

const contentBlockClasses = "flex flex-col gap-4 pb-8";
const figureAspect = "aspect-[512/260]";

export const SolutionCard = ({
  className,
  description,
  eyebrow,
  // href,
  image,
  title,
  variant,
  ...props
}: ISolutionCard) => {
  return (
    <article className={className} {...props}>
      <div className={variants({ variant })}>
        <ContentBlock
          className={contentBlockClasses}
          description={description}
          descriptionClassName="font-light leading-[1.5] line-clamp-6 text-size-18 text-default-base"
          eyebrow={eyebrow}
          eyebrowClassName="font-mono font-normal text-size-14 uppercase md:text-default-base"
          title={title}
          titleClassName="font-medium leading-[1.1] line-clamp-3 tracking-[-0.02em] first:mt-0"
          titleVariant="lg"
        />
        <div className="flex items-end">
          <figure
            className={cn(
              "relative size-full flex items-center justify-center",
              figureAspect,
            )}
          >
            <Image
              {...image}
              className="object-contain"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </figure>
        </div>
      </div>
    </article>
  );
};
