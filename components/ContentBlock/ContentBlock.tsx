"use client";

import { cn } from "@/utils/classes";
import { cva } from "class-variance-authority";
import parse from "html-react-parser";
import { Button } from "../Button/Button";
import type { IContentBlock } from "./ContentBlock.types";

const containerClass = "flex flex-col flex-1";

const containerVariants = cva(containerClass, {
  variants: {
    variant: {
      left: "[&>div]:text-left",
      center: "[&>div]:text-center [&>div]:items-center",
      inline: "lg:gap-10 lg:flex-row",
    },
  },
  defaultVariants: { variant: "left" },
});

const eyebrowVariants = cva("font-mono uppercase w-fit", {
  variants: {
    variant: {
      default: "text-default-base",
      highlight: "bg-brand-sky-blue px-2.5 py-0.5 text-deep-green",
    },
  },
  defaultVariants: { variant: "default" },
});

const titleVariants = cva("font-medium leading-[110%] text-default-heading", {
  variants: {
    variant: {
      default: "text-size-32 lg:text-size-40 2xl:text-size-48",
      sm: "text-lg lg:text-xl",
      md: "text-xl lg:text-2xl",
    },
  },
  defaultVariants: { variant: "default" },
});

const styles = {
  blockquote:
    "border-l-4 border-l-brand-aqua font-medium leading-[1.25] pl-5 text-default-heading w-fit lg:leading-[1.5] 2xl:text-lg",
  content: containerClass,
  ctaGroup: "grid gap-y-3 md:flex md:gap-x-4",
  date: "font-mono text-default-light uppercase max-lg:text-sm",
  description: "font-light text-default-base lg:text-lg",
  eyebrowContainer: "flex items-center gap-x-4.5",
  icon: "size-8 text-icon-default lg:size-12",
  header: containerClass,
};

export const ContentBlock = ({
  blockquote,
  blockquoteClassName,
  className,
  ctaGroupClassName,
  date,
  dateClassName,
  description,
  descriptionClassName,
  eyebrow,
  eyebrowClassName,
  eyebrowVariant = "default",
  Icon,
  iconClassName,
  primaryCTA,
  primaryCTAClassName,
  secondaryCTA,
  secondaryCTAClassName,
  title,
  titleClassName,
  titleTag = "h2",
  titleVariant = "default",
  variant = "left",
  ...props
}: IContentBlock) => {
  if (
    !description &&
    !title &&
    !Icon &&
    !eyebrow &&
    !blockquote &&
    !primaryCTA &&
    !secondaryCTA
  ) {
    return null;
  }

  const Heading = titleTag || "h2";

  const classes = {
    blockquote: cn(styles.blockquote, blockquoteClassName),
    container: cn(containerVariants({ variant }), className),
    ctaGroup: cn(styles.ctaGroup, ctaGroupClassName),
    date: cn(styles.date, dateClassName),
    description: cn(styles.description, descriptionClassName),
    eyebrow: cn(eyebrowVariants({ variant: eyebrowVariant }), eyebrowClassName),
    icon: cn(styles.icon, iconClassName),
    title: cn(titleVariants({ variant: titleVariant }), titleClassName),
  };

  return (
    <div className={classes.container} {...props}>
      <div className={styles.header}>
        {Icon && <Icon className={classes.icon} />}
        {(date || eyebrow) && (
          <div className={styles.eyebrowContainer}>
            {eyebrow && <p className={classes.eyebrow}>{eyebrow}</p>}
            {date && <time className={classes.date}>{date}</time>}
          </div>
        )}
        {title && <Heading className={classes.title}>{parse(title)}</Heading>}
      </div>
      <div className={styles.content}>
        {description && (
          <p className={classes.description}>{parse(description)}</p>
        )}
        {blockquote && (
          <blockquote className={classes.blockquote}>{blockquote}</blockquote>
        )}
        {(primaryCTA || secondaryCTA) && (
          <div className={classes.ctaGroup}>
            {primaryCTA && (
              <Button {...primaryCTA} className={primaryCTAClassName} />
            )}
            {secondaryCTA && (
              <Button
                {...secondaryCTA}
                className={secondaryCTAClassName}
                variant="outline"
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};
