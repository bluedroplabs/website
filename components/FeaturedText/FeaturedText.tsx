"use client";

import { Container } from "@/components/Container/Container";
import { cn } from "@/utils";
import { cva } from "class-variance-authority";
import { ContentBlock } from "../ContentBlock/ContentBlock";
import { DottedBackground } from "../DottedBackground/DottedBackground";
import type { IFeaturedText } from "./FeaturedText.types";

const contentBlockSizeVariants = cva("mx-auto", {
  variants: {
    variant: {
      default: "max-w-207",
      small: "max-w-154.5",
    },
  },
  defaultVariants: { variant: "default" },
});

export const FeaturedText = ({
  author,
  className,
  description,
  eyebrow,
  title,
  variant = "default",
  ...props
}: IFeaturedText) => {
  return (
    <Container
      className={cn("border-t border-border-normal mt-10 lg:mt-16", className)}
      {...props}
    >
      <DottedBackground className="border-x border-border-normal py-16 lg:py-30 w-full">
        <ContentBlock
          author={author}
          authorClassName="mt-5 lg:mt-6"
          className={contentBlockSizeVariants({ variant })}
          description={description}
          descriptionClassName="mt-5 lg:mt-6"
          eyebrow={eyebrow}
          eyebrowClassName="mb-6"
          eyebrowVariant="highlight"
          title={title}
          titleClassName="font-light leading-[1.25] tracking-[0]"
          titleVariant="md"
          variant="center"
        />
      </DottedBackground>
    </Container>
  );
};
