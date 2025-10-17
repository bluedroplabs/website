"use client";

import { Container } from "@/components/Container/Container";
import { cn } from "@/utils/classes";
import { Button } from "../Button/Button";
import type { IHomepageHero } from "./HomepageHero.types";
import {
  HomepageHeroLargeBg,
  HomepageHeroLargeRadial,
} from "./components/HomepageHeroLargeBg";
import {
  HomepageHeroMediumBg,
  HomepageHeroMediumRadial,
} from "./components/HomepageHeroMediumBg";
import {
  HomepageHeroSmallBg,
  HomepageHeroSmallRadial,
} from "./components/HomepageHeroSmallBg";

const styles = {
  background:
    "absolute bg-page-default bottom-0 text-page-default size-auto z-10 max-lg:size-full",
  container: "text-center text-default-base z-20",
  description: "leading-[1.5] text-lg max-xs:text-sm md:text-base 2xl:text-xl",
  inner:
    "mx-auto space-y-4.75 xs:max-w-125 md:max-w-[63.56%] 2xl:max-w-[48.5%]",
  radial: "absolute bottom-0 left-0",
  visibility: {
    mobile: "md:hidden",
    tablet: "max-md:hidden 2xl:hidden",
    desktop: "max-2xl:hidden",
  },
  title:
    "leading-[90%] text-[14.75cqw] md:text-[10cqw] lg:text-[11cqw] 2xl:text-[13cqw]",
  wrapper:
    "py-22.5 relative flex items-center justify-center overflow-hidden max-xs:py-20 md:py-16 lg:py-29 2xl:pb-33.25 2xl:pt-34.75",
};

export const HomepageHero = ({
  className,
  cta,
  description,
  title,
  ...props
}: IHomepageHero) => {
  return (
    <div className={cn(styles.wrapper, className)}>
      <HomepageHeroSmallBg
        className={cn(styles.visibility.mobile, styles.background)}
      />
      <HomepageHeroMediumBg
        className={cn(styles.visibility.tablet, styles.background)}
      />
      <HomepageHeroLargeBg
        className={cn(styles.visibility.desktop, styles.background)}
      />
      <HomepageHeroSmallRadial
        className={cn(styles.visibility.mobile, styles.radial)}
      />
      <HomepageHeroMediumRadial
        className={cn(styles.visibility.tablet, styles.radial)}
      />
      <HomepageHeroLargeRadial
        className={cn(styles.visibility.desktop, styles.radial)}
      />
      <Container className={styles.container} {...props}>
        <div className={styles.inner} style={{ containerType: "inline-size" }}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
          <Button {...cta} />
        </div>
      </Container>
    </div>
  );
};
