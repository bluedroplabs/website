"use client";

import { Container } from "@/components/Container/Container";
import { cn } from "@/utils/classes";
import { Button } from "../Button/Button";
import type { ICtaBlock } from "./CtaBlock.types";

const styles = {
  container: "font-medium text-center py-20 lg:py-30",
  cta: "mt-6",
  description: "font-light mt-4 text-default-base/90",
  inner: "mx-auto lg:max-w-154.5",
  title: "leading-none text-default-heading text-size-48 tracking-[-0.02em]",
};

export const CtaBlock = ({
  className,
  cta,
  description,
  title,
  ...props
}: ICtaBlock) => {
  return (
    <Container className={cn(styles.container, className)} {...props}>
      <div className={styles.inner}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <Button {...cta} className={styles.cta} />
      </div>
    </Container>
  );
};
