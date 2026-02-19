import type { VariantProps } from "class-variance-authority";
import type { ReactNode, ElementType } from "react";
import type { dottedVariants } from "./WithDottedBackground";

export interface IWithDottedBackground extends VariantProps<
  typeof dottedVariants
> {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}
