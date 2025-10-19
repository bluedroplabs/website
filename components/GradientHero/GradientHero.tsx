"use client";

import { Container } from "@/components/Container/Container";
import { useAppTheme } from "@/hooks/useAppTheme";
import { cn } from "@/utils/classes";
import { ContentBlock } from "../ContentBlock/ContentBlock";
import { DottedBackground } from "../DottedBackground/DottedBackground";
import type { IGradientHero } from "./GradientHero.types";
import { GradientLargeBg } from "./components/GradientLargeBg";
import { GradientSmallBg } from "./components/GradientSmallBg";

const styles = {
  background: "absolute right-0 bottom-0 text-page-default h-full w-auto",
  container: "flex items-end min-h-120",
  contentBlock: "relative py-10 z-10 lg:py-16",
  description: "mt-4 text-xl lg:text-2xl",
  eyebrow: "font-normal mb-6 text-default-highlight max-md:max-w-[70%] lg:mb-8",
  gradient:
    "bg-gradient-to-b from-brand-transparent via-page-default to-page-default size-full absolute inset-0",
  gradientSmall:
    "absolute right-0 bottom-0 text-page-default h-full w-auto lg:hidden",
  title: "font-normal leading-[0.9] lg:max-w-200",
  wrapper: "min-h-120 w-full relative",
};

export const GradientHero = ({
  className,
  description,
  eyebrow,
  title,
  ...props
}: IGradientHero) => {
  const { isDarkMode } = useAppTheme();

  return (
    <DottedBackground
      className={cn(styles.wrapper, isDarkMode && "bg-page-default")}
    >
      <div className={styles.gradient} />
      <GradientLargeBg className={cn(styles.background, "max-lg:hidden")} />
      <GradientSmallBg className={cn(styles.background, "lg:hidden")} />
      <Container className={cn(styles.container, className)} {...props}>
        <ContentBlock
          className={styles.contentBlock}
          description={description}
          descriptionClassName={styles.description}
          eyebrow={eyebrow}
          eyebrowClassName={styles.eyebrow}
          title={title}
          titleClassName={styles.title}
          titleTag="h1"
          titleVariant="gradient-hero"
        />
      </Container>
    </DottedBackground>
  );
};
