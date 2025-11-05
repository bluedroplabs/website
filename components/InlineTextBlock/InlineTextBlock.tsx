"use client";

import { Container } from "@/components/Container/Container";
import { ContentBlock } from "../ContentBlock/ContentBlock";
import type { IInlineTextBlock } from "./InlineTextBlock.types";

export const InlineTextBlock = ({
  className,
  description,
  eyebrow,
  title,
  ...props
}: IInlineTextBlock) => {
  return (
    <Container className={className} {...props}>
      <ContentBlock
        className="py-14 lg:border-x lg:border-border-normal lg:px-15 lg:py-20"
        description={description}
        descriptionClassName="mt-5 [&_strong]:font-medium"
        eyebrow={eyebrow}
        eyebrowClassName="mb-5 lg:mb-4"
        eyebrowVariant="highlight"
        title={title}
        variant="inline"
      />
    </Container>
  );
};
