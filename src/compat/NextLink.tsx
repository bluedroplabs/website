import type { AnchorHTMLAttributes, ReactNode } from "react";

export interface LinkProps extends Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href"
> {
  href: string | URL;
  children?: ReactNode;
}

export default function Link({ href, children, ...props }: LinkProps) {
  return (
    <a href={href.toString()} {...props}>
      {children}
    </a>
  );
}
