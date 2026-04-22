"use client";

import { Button } from "@/components/Button/Button";
import { Container } from "@/components/Container/Container";
import { cn } from "@/utils/classes";
import parse from "html-react-parser";
import type { IFeaturedCtaBand } from "./FeaturedCtaBand.types";

export const FeaturedCtaBand = ({
  className,
  cta,
  description,
  text,
  title,
  variant = "stacked",
  ...props
}: IFeaturedCtaBand) => {
  const isInline = variant === "inline";
  const isCentered = variant === "centered";

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
        {isCentered ? (
          <div className="bg-dotted bg-brand-sky-blue/10 flex flex-col items-center justify-center px-6 py-12 lg:px-10 lg:py-20">
            <p className="font-light text-size-20 lg:text-size-24 leading-[1.5] text-default-base text-center max-w-155 [&_strong]:font-semibold">
              {text && parse(text)}
            </p>
          </div>
        ) : (
          <div
            className={cn(
              "flex flex-col gap-8 items-start",
              isInline
                ? "bg-gradient-to-r from-page-default to-brand-sky-blue/25 px-6 py-8 lg:flex-row lg:items-center lg:gap-10 lg:px-16 lg:py-12"
                : "bg-dotted bg-brand-sky-blue/10 px-6 py-12 lg:flex-row lg:items-center lg:gap-30 lg:px-16 lg:py-20",
            )}
          >
            {isInline ? (
              <>
                <h2 className="font-medium text-size-28 lg:text-size-32 leading-[1.25] tracking-[-0.02em] text-default-heading lg:flex-1 lg:min-w-0">
                  {title}
                </h2>
                <p className="font-light text-size-18 leading-[1.5] text-default-base lg:flex-1 lg:min-w-0">
                  {description}
                </p>
                {cta && <Button {...cta} />}
              </>
            ) : (
              <>
                <div className="flex flex-col gap-3 lg:flex-1 lg:min-w-0">
                  <h2 className="font-medium text-size-28 lg:text-size-32 leading-[1.25] tracking-[-0.02em] text-default-heading">
                    {title}
                  </h2>
                  <p className="font-light text-size-18 lg:text-size-20 leading-[1.5] text-default-base">
                    {description}
                  </p>
                </div>
                {cta && <Button {...cta} variant="outline" />}
              </>
            )}
          </div>
        )}
      </div>
    </Container>
  );
};
