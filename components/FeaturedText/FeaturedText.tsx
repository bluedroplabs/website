"use client";

import { cn } from "@/utils";
import { cva } from "class-variance-authority";
import { ContentBlock } from "../ContentBlock/ContentBlock";
import { DottedBackground } from "../DottedBackground/DottedBackground";
import type {
  IFeaturedText,
  TFeaturedTextBgVariant,
} from "./FeaturedText.types";

const bgVariantStyles: Record<TFeaturedTextBgVariant, string> = {
  sky: "bg-surface-tint-sky",
  none: "",
};

const contentBlockSizeVariants = cva("mx-auto w-full", {
  variants: {
    variant: {
      default: "max-w-full md:max-w-207",
      small: "max-w-full md:max-w-154.5",
    },
  },
  defaultVariants: { variant: "default" },
});

export const FeaturedText = ({
  author,
  bgVariant = "none",
  description,
  eyebrow,
  title,
  variant = "default",
}: IFeaturedText) => {
  return (
    <div className="border-t border-border-normal">
      <div className="max-w-[var(--breakpoint-2xl)] md:mx-auto  px-5 md:px-8 lg:px-10 xl:px-20 3xl:px-0">
        <div className={cn("size-full", bgVariantStyles[bgVariant])}>
          <DottedBackground className="border-x border-border-normal w-full">
            <div className="flex justify-center px-10 py-14 md:px-14 md:py-14 lg:py-30">
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
            </div>
          </DottedBackground>
        </div>
      </div>
    </div>
  );
};
