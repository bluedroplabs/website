"use client";

import { Container } from "@/components/Container/Container";
import { cn } from "@/utils/classes";
import { Button } from "../Button/Button";
import type { ICtaBlock } from "./CtaBlock.types";

const styles = {
  container: "font-medium py-20 text-center",
  cta: "mt-6",
  description: "font-light mt-4 text-default-base/90",
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
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <Button {...cta} className={styles.cta} />
    </Container>
  );
};
