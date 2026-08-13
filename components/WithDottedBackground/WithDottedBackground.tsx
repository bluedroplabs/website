import type { ReactNode, ElementType } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/classes";

export const dottedVariants = cva("", {
  variants: {
    size: {
      sm: "bg-dotted-sm",
      default: "bg-dotted",
      lg: "bg-dotted-lg",
      xl: "bg-dotted-xl",
    },
    variant: {
      default: "bg-dotted",
      light: "bg-dotted-light",
      subtle: "bg-dotted-subtle",
    },
  },
  defaultVariants: {
    size: "default",
    variant: "default",
  },
});

interface WithDottedBackgroundProps extends VariantProps<
  typeof dottedVariants
> {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

export const WithDottedBackground = ({
  children,
  className,
  size,
  variant,
  as: Component = "div",
  ...props
}: WithDottedBackgroundProps) => {
  return (
    <Component
      className={cn(dottedVariants({ size, variant }), className)}
      {...props}
    >
      {children}
    </Component>
  );
};
