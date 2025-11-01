"use client";

import { Container } from "@/components/Container/Container";
import { cn } from "@/utils/classes";
import Image from "next/image";
import { ContentBlock } from "../ContentBlock/ContentBlock";
import { DottedBackground } from "../DottedBackground/DottedBackground";
import type { IDetailPageHero } from "./DetailPageHero.types";

export const DetailPageHero = ({
  author,
  className,
  date,
  eyebrow,
  image,
  title,
  ...props
}: IDetailPageHero) => {
  return (
    <DottedBackground>
      <Container
        className={cn(
          "bg-gradient-to-b from-transparent via-page-default via-60% to-page-default w-full max-lg:pt-16",
          className,
        )}
        displays={{ lg: "flex" }}
        {...props}
      >
        <ContentBlock
          author={`By ${author}`}
          authorClassName="mt-6 lg:mt-8"
          className="lg:flex-1 lg:justify-end lg:max-w-1/2 lg:pb-10 lg:pr-10 2xl:pb-20 2xl:pr-20"
          date={date}
          eyebrow={eyebrow}
          eyebrowVariant="highlight"
          title={title}
          titleClassName="mt-6 lg:mt-8"
          titleVariant="2xl"
        />

        <figure className="aspect-[416/346] relative w-[calc(100%+1.25rem)] md:w-[calc(100%+2rem)] max-lg:mt-8 lg:aspect-[6/5] lg:flex-1 lg:-mr-20 lg:w-[calc(100%+5rem)]">
          {image && (
            <Image
              {...image}
              className="object-cover"
              fill
              sizes="100vw, (min-width: 768px) 50vw"
            />
          )}
        </figure>
      </Container>
    </DottedBackground>
  );
};
