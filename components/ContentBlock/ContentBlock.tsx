"use client";

import { cn } from "@/utils/classes";
import { formatDateTimeAttribute } from "@/utils/date";
import { cva } from "class-variance-authority";
import parse from "html-react-parser";
import { Button } from "../Button/Button";
import type { IContentBlock } from "./ContentBlock.types";

const containerClass = "flex flex-col";

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

const eyebrowVariants = cva("font-mono leading-[1] uppercase w-fit", {
  variants: {
    variant: {
      default: "text-size-14 lg:text-size-16",
      highlight: "bg-brand-sky-blue px-2.5 py-0.5 text-deep-green",
    },
  },
  defaultVariants: { variant: "default" },
});

const titleVariants = cva(
  "font-medium leading-[110%] !text-default-heading tracking-tight [&_em]:not-italic [&_em]:text-default-highlight [&_strong]:pl-2 [&_strong]:pr-1 [&_strong]:font-medium [&_strong]:bg-brand-light-blue",
  {
    variants: {
      variant: {
        default: "text-size-32 lg:text-size-40 2xl:text-size-48",
        sm: "text-size-18 lg:text-size-20",
        md: "text-size-20 lg:text-size-24",
        lg: "text-size-24 lg:text-size-32",
        xl: "text-size-32 lg:text-size-48",
        "2xl": "text-size-48 lg:text-size-64",
        "gradient-hero": "text-[12.25cqw] lg:text-[5cqw]",
        "resource-card-default": "text-size-18 md:text-size-32",
        "resource-card-featured": "text-size-24 md:text-size-48",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

const styles = {
  author: "font-mono not-italic uppercase",
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
  author,
  authorClassName,
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
    !author &&
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
  const isInline = variant === "inline";

  const classes = {
    author: cn(styles.author, authorClassName),
    blockquote: cn(styles.blockquote, blockquoteClassName),
    container: cn(containerVariants({ variant }), className),
    ctaGroup: cn(styles.ctaGroup, ctaGroupClassName),
    date: cn(styles.date, dateClassName),
    description: cn(styles.description, descriptionClassName),
    eyebrow: cn(eyebrowVariants({ variant: eyebrowVariant }), eyebrowClassName),
    icon: cn(styles.icon, iconClassName),
    title: cn(titleVariants({ variant: titleVariant }), titleClassName),
  };

  const getColumnClass = (classes: string) => cn(isInline && "flex-1", classes);

  return (
    <div className={classes.container} {...props}>
      <div className={getColumnClass(styles.header)}>
        {Icon && <Icon className={classes.icon} />}
        {(date || eyebrow) && (
          <div className={styles.eyebrowContainer}>
            {eyebrow && <p className={classes.eyebrow}>{eyebrow}</p>}
            {date && (
              <time
                className={classes.date}
                dateTime={formatDateTimeAttribute(date)}
              >
                {date}
              </time>
            )}
          </div>
        )}
        {title && <Heading className={classes.title}>{parse(title)}</Heading>}
        {author && <cite className={classes.author}>{author}</cite>}
      </div>
      <div className={getColumnClass(styles.content)}>
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
