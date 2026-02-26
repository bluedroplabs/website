"use client";

import { Container } from "@/components/Container/Container";
import { cn } from "@/utils/classes";
import { useAppTheme } from "@/hooks/useAppTheme";
import Image from "next/image";
import type { HTMLAttributes } from "react";
import { ContentBlock } from "../ContentBlock/ContentBlock";
import { DottedBackground } from "../DottedBackground/DottedBackground";
import type { IBasic1Up } from "./Basic1Up.types";
import type { IImage } from "@/types/image.types";

const dottedBgClasses = [
  "size-full relative max-md:w-screen md:col-span-6 md:w-[calc(100%+1.25rem)]",
  "before:bg-deep-green-5 before:content-[''] before:absolute before:inset-0 before:-z-10 before:size-full",
  "border-border-light border-l border-solid min-h-0 overflow-hidden",
];

const figureClasses = [
  "aspect-[720/600] object-cover object-left-top relative flex items-end w-full",
  "relative h-auto min-h-0",
];

const descriptionClasses =
  "text-size-18 leading-[1.5] [&>p]:mb-4 [&>p:last-child]:mb-0";

interface Basic1UpAssetProps extends HTMLAttributes<HTMLDivElement> {
  image: IImage;
  isDarkMode: boolean;
}

function Basic1UpAsset({
  image,
  isDarkMode,
  className,
  ...figureProps
}: Basic1UpAssetProps) {
  const { srcLight, ...imageProps } = image;
  const src = isDarkMode && srcLight ? srcLight : image.src;

  return (
    <DottedBackground className={cn(dottedBgClasses, className)}>
      <div className="flex items-end size-full">
        <figure className={cn(figureClasses)} {...figureProps}>
          <Image
            {...imageProps}
            className="object-cover"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            src={src}
          />
        </figure>
      </div>
    </DottedBackground>
  );
}

export function Basic1Up({
  alignment,
  blockquote,
  description,
  eyebrow,
  image,
  primaryCTA,
  secondaryCTA,
  title,
  className,
  ...props
}: IBasic1Up) {
  const isLeft = alignment === "left";
  const { isDarkMode } = useAppTheme();

  const contentBlockClassName = cn(
    "md:col-span-6 flex flex-col justify-center px-6 py-12 md:px-8 md:py-25 lg:px-16 2xl:py-25",
    isLeft ? "md:-mr-5" : "md:-ml-5",
  );

  const assetMobileClassName = cn(
    "md:-ml-5 px-6 py-12 md:px-8 md:py-20 lg:px-16 2xl:py-20",
    !isLeft && "md:hidden",
  );

  return (
    <Container
      {...props}
      className={cn("border border-border-normal border-solid", className)}
      displays={{ md: "grid" }}
      noPadding
    >
      {!isLeft && (
        <Basic1UpAsset
          className="max-md:hidden md:-mr-5"
          image={image}
          isDarkMode={isDarkMode}
        />
      )}
      <ContentBlock
        blockquote={blockquote}
        blockquoteClassName="my-0 pl-6 2xl:text-size-18"
        className={contentBlockClassName}
        ctaGroupClassName="max-lg:flex-col gap-4"
        description={description}
        descriptionClassName={descriptionClasses}
        eyebrow={eyebrow}
        eyebrowVariant="highlight"
        groupHeaderWithDescription
        primaryCTA={primaryCTA}
        secondaryCTA={secondaryCTA}
        title={title}
        titleClassName="text-size-40 lg:text-size-48 leading-[1.1] tracking-tight py-0"
      />
      <Basic1UpAsset
        className={assetMobileClassName}
        image={image}
        isDarkMode={isDarkMode}
      />
    </Container>
  );
}
