"use client";

import { Container } from "@/components/Container/Container";
import { cn } from "@/utils";
import { ContentBlock } from "../ContentBlock/ContentBlock";
import type { IInlineTextBlock } from "./InlineTextBlock.types";

export const InlineTextBlock = ({
  author,
  blockquote,
  className,
  description,
  eyebrow,
  primaryCTA,
  title,
  ...props
}: IInlineTextBlock) => {
  return (
    <Container
      className={cn(
        "max-w-[var(--breakpoint-2xl)] mx-auto border-t border-border-normal",
        className,
      )}
      {...props}
    >
      <ContentBlock
        author={author}
        blockquote={blockquote}
        blockquoteClassName="mt-6 lg:mt-auto"
        className="py-14 lg:border-x lg:border-border-normal lg:px-15 lg:py-20"
        ctaGroupClassName="mt-auto"
        description={description}
        descriptionClassName="mb-8 mt-5 lg:mb-13 first:mt-0 last:mb-0 [&_strong]:font-medium"
        eyebrow={eyebrow}
        eyebrowClassName="mb-5 lg:mb-4"
        eyebrowVariant="highlight"
        primaryCTA={primaryCTA}
        title={title}
        titleClassName="lg:mb-6 last:lg:mb-0"
        variant="inline"
      />
    </Container>
  );
};
