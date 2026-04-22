"use client";

import { Button } from "@/components/Button/Button";
import { Container } from "@/components/Container/Container";
import { cn } from "@/utils/classes";
import parse from "html-react-parser";
import type { IFeaturedTextCta } from "./FeaturedTextCta.types";

const textClasses = {
  body: "font-light text-size-20 lg:text-size-24 leading-[1.5] [&_strong]:font-semibold",
  heading:
    "font-medium text-size-28 lg:text-size-32 leading-[1.25] tracking-[-0.01em]",
};

export const FeaturedTextCta = ({
  className,
  cta,
  text,
  variant = "body",
  ...props
}: IFeaturedTextCta) => {
  const Tag = variant === "heading" ? "h2" : "p";

  return (
    <Container
      className={cn(
        "border-t border-border-normal bg-page-default mx-auto",
        className,
      )}
      noPadding
      {...props}
    >
      <div className="max-w-[var(--breakpoint-2xl)] mx-auto border-x border-border-normal">
        <div className="bg-dotted flex flex-col gap-8 items-center px-6 py-12 lg:px-10 lg:py-20">
          <Tag
            className={cn(
              "text-default-base text-center max-w-207",
              textClasses[variant],
              variant === "heading" && "text-default-heading",
            )}
          >
            {parse(text)}
          </Tag>
          {cta && <Button {...cta} />}
        </div>
      </div>
    </Container>
  );
};
