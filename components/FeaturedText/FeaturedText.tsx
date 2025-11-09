"use client";

import { Container } from "@/components/Container/Container";
import { cn } from "@/utils";
import { ContentBlock } from "../ContentBlock/ContentBlock";
import { DottedBackground } from "../DottedBackground/DottedBackground";
import type { IFeaturedText } from "./FeaturedText.types";

export const FeaturedText = ({
  className,
  description,
  eyebrow,
  ...props
}: IFeaturedText) => {
  return (
    <Container
      className={cn("border-t border-border-normal mt-10 lg:mt-16", className)}
      {...props}
    >
      <DottedBackground className="border-x border-border-normal py-16 lg:py-30 w-full">
        <ContentBlock
          className="max-w-207 mx-auto"
          description={description}
          descriptionClassName="text-size-24 font-light lg:text-size-24 [&_strong]:font-semibold"
          eyebrow={eyebrow}
          eyebrowClassName="mb-6"
          eyebrowVariant="highlight"
          variant="center"
        />
      </DottedBackground>
    </Container>
  );
};
