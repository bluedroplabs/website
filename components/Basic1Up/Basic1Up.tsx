"use client";

import { Container } from "@/components/Container/Container";
import { cn } from "@/utils/classes";
import Image from "next/image";
import type { HTMLAttributes } from "react";
import { ContentBlock } from "../ContentBlock/ContentBlock";
import { DottedBackground } from "../DottedBackground/DottedBackground";
import type { IBasic1Up } from "./Basic1Up.types";

const dottedBgClasses = [
  "px-6 pt-21 size-full relative max-md:w-screen md:col-span-6 md:w-[calc(100%+1.25rem)] md:px-10 md:pt-10 lg:px-16.5 lg:pt-16.5 2xl:p-20 2xl:pb-0",
  "before:bg-deep-green-5 before:content-[''] before:absolute before:inset-0 before:-z-10 before:size-full",
];

const figureClasses = [
  "aspect-[345/309] object-cover relative flex items-end lg:aspect-[464/470] 2xl:aspect-[562/568]",
  "relative h-auto w-full",
];

export const Basic1Up = ({
  alignment,
  blockquote,
  description,
  eyebrow,
  image,
  primaryCTA,
  secondaryCTA,
  title,
  ...props
}: IBasic1Up) => {
  const isLeft = alignment === "left";

  const Asset = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
    if (!image) return null;

    return (
      <DottedBackground className={cn(dottedBgClasses, className)}>
        <div className="flex items-end size-full">
          <figure className={cn(figureClasses)} {...props}>
            <Image
              {...image}
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </figure>
        </div>
      </DottedBackground>
    );
  };

  return (
    <Container {...props} displays={{ md: "grid" }} noPadding>
      {!isLeft && <Asset className="max-md:hidden md:-mr-5" />}
      <ContentBlock
        blockquote={blockquote}
        blockquoteClassName="my-6 lg:my-8"
        className={cn(
          "md:col-span-6 px-6 py-12 md:px-8 lg:p-10 2xl:px-16 2xl:py-25",
          isLeft ? "md:-mr-5" : "md:-ml-5",
        )}
        ctaGroupClassName="max-lg:flex-col"
        description={description}
        descriptionClassName="lg:max-xl:text-base"
        eyebrow={eyebrow}
        eyebrowVariant="highlight"
        primaryCTA={primaryCTA}
        secondaryCTA={secondaryCTA}
        title={title}
        titleClassName="py-4 md:py-5"
      />
      <Asset className={cn("md:-ml-5", !isLeft && "md:hidden")} />
    </Container>
  );
};
