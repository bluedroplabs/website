"use client";

import { cn } from "@/utils/classes";
import { formatDateTimeAttribute } from "@/utils/date";
import { cva } from "class-variance-authority";
import Image from "next/image";
import { ContentBlock } from "../ContentBlock/ContentBlock";
import type { TContentBlockTitleVariant } from "../ContentBlock/ContentBlock.types";
import type { IResourceCard, TResourceCardVariant } from "./ResourceCard.types";

const titleVariantMap: Record<TResourceCardVariant, TContentBlockTitleVariant> =
  {
    default: "resource-card-default",
    featured: "resource-card-featured",
  };

const contentBlockVariants = cva("", {
  variants: {
    variant: {
      default: "pt-10",
      featured: "pb-8 pt-6 md:pl-8",
    },
  },
  defaultVariants: { variant: "default" },
});

const imageVariants = cva("basis-1/2 overflow-hidden relative rounded-lg", {
  variants: {
    variant: {
      default:
        "aspect-[120/118] min-w-[30.77%] md:aspect-[392/290] md:min-w-[27.27%]",
      featured:
        "aspect-[392/290] w-full md:aspect-[576/416] md:w-1/2 md:mr-8 md:rounded-none",
    },
  },
  defaultVariants: { variant: "default" },
});

const variants = cva("px-6 md:p-8 items-center", {
  variants: {
    variant: {
      default: "py-5 max-md:flex max-md:gap-5 md:pb-10",
      featured: "pt-5 md:pb-8 md:flex",
    },
  },
  defaultVariants: { variant: "default" },
});

const styles = {
  contentWrapper: "basis-1/2 md:min-w-1/2",
  dateMobile:
    "block mt-3 font-mono leading-[1.25] text-default-light text-sm uppercase md:hidden",
  date: {
    default: "leading-[1] max-md:hidden",
    featured: "leading-[1]",
  },
  description: {
    default: "mt-4 max-md:hidden hidden",
    featured: "mt-4 max-md:hidden",
  },
  eyebrow: "max-md:text-size-14",
  image: "object-cover size-full",
  title: {
    default: "leading-[1.25] md:mt-6 mt-2",
    featured: "leading-[1.25] md:mt-6 mt-4",
  },
};

export const ResourceCard = ({
  className,
  date,
  description,
  eyebrow,
  image,
  title,
  variant = "default",
  ...props
}: IResourceCard) => {
  const isFeatured = variant === "featured";

  return (
    <article className={cn(variants({ variant }), className)} {...props}>
      <figure className={imageVariants({ variant })}>
        {image && <Image {...image} className={styles.image} fill />}
      </figure>
      <div className={styles.contentWrapper}>
        <ContentBlock
          className={contentBlockVariants({ variant })}
          date={date}
          dateClassName={styles.date[variant]}
          description={description}
          descriptionClassName={styles.description[variant]}
          eyebrow={eyebrow}
          eyebrowClassName={styles.eyebrow}
          eyebrowVariant="highlight"
          title={title}
          titleClassName={styles.title[variant]}
          titleVariant={titleVariantMap[variant]}
        />
        {!isFeatured && (
          <time
            className={styles.dateMobile}
            dateTime={formatDateTimeAttribute(date)}
          >
            {date}
          </time>
        )}
      </div>
    </article>
  );
};
