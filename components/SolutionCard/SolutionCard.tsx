"use client";

import { cn } from "@/utils";
import { cva } from "class-variance-authority";
import Image from "next/image";
import Link from "next/link";
import { ContentBlock } from "../ContentBlock/ContentBlock";
import type { ISolutionCard } from "./SolutionCard.types";

const variants = cva("border-border-normal grid max-lg:border-t", {
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
      <Link
        className={cn(variants({ variant }), isFull && "lg:min-h-95")}
        href={href}
      >
        <ContentBlock
          className="pb-6 pt-12 px-6 lg:px-12 lg:pb-10"
          description={description}
          descriptionClassName="mt-4 line-clamp-6"
          eyebrow={eyebrow}
          title={title}
          titleClassName="mt-4 line-clamp-3"
          titleVariant="lg"
        />
        <div
          className={cn(
            "flex items-end px-11",
            isFull ? "lg:px-16.5 lg:max-2xl:pb-6.5 2xl:pt-16" : "lg:px-11.5",
          )}
        >
          <figure
            className={cn(
              "aspect-[305/176] border border-b-0 border-black-40 relative w-full h-auto",
              isFull ? "lg:aspect-[337/290]" : "lg:aspect-[380/252]",
            )}
          >
            <Image {...image} className="object-cover" fill />
          </figure>
        </div>
      </Link>
    </article>
  );
};
