"use client";

import { cn } from "@/utils";
import { cva } from "class-variance-authority";
import Image from "next/image";
import Link from "next/link";
import { ContentBlock } from "../ContentBlock/ContentBlock";
import type { ISolutionCard } from "./SolutionCard.types";

const variants = cva("border-border-normal grid h-full max-lg:border-t", {
  variants: {
    variant: {
      basic: "",
      full: "lg:flex lg:[&>*]:basis-1/2",
    },
  },
  defaultVariants: { variant: "basic" },
});

export const SolutionCard = ({
  className,
  description,
  eyebrow,
  href,
  image,
  title,
  variant,
  ...props
}: ISolutionCard) => {
  if (!href) return null;

  const isFull = variant === "full";

  return (
    <article className={className} {...props}>
      <Link className={variants({ variant })} href={href}>
        <ContentBlock
          className="pb-6 pt-12 px-6 lg:px-12 lg:pb-10"
          description={description}
          descriptionClassName="mt-4 line-clamp-6"
          eyebrow={eyebrow}
          title={title}
          titleClassName="mt-4 line-clamp-3 first:mt-0"
          titleVariant="lg"
        />
        <div className="flex items-end">
          <figure
            className={cn(
              "relative size-full",
              isFull ? "aspect-[785/466]" : "aspect-[785/306]",
            )}
          >
            <Image {...image} className="object-cover" fill />
          </figure>
        </div>
      </Link>
    </article>
  );
};
