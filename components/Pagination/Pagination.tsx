import type { ComponentProps } from "react";

import type { Button } from "@/components/Button/Button";
import { buttonVariants } from "@/components/Button/Button";
import { cn } from "@/utils/classes";
import Link from "next/link";
import { ArrowLeftIcon } from "../Icon/ArrowLeftIcon";
import { ArrowRightIcon } from "../Icon/ArrowRightIcon";
import { MoreHorizontalIcon } from "../Icon/MoreHorizontalIcon";

const Pagination = ({ className, ...props }: ComponentProps<"nav">) => (
  <nav
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    data-slot="pagination"
    role="navigation"
    {...props}
  />
);

const PaginationContent = ({ className, ...props }: ComponentProps<"ul">) => (
  <ul
    className={cn("flex flex-row items-center gap-2 font-mono", className)}
    data-slot="pagination-content"
    {...props}
  />
);

const PaginationItem = ({ ...props }: ComponentProps<"li">) => (
  <li data-slot="pagination-item" {...props} />
);

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ComponentProps<typeof Button>, "size"> &
  ComponentProps<typeof Link>;

const PaginationLink = ({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) => (
  <Link
    aria-current={isActive ? "page" : undefined}
    className={cn(
      "size-8",
      buttonVariants({
        variant: "ghost",
        size,
      }),
      className,
    )}
    data-active={isActive}
    data-slot="pagination-link"
    {...props}
  />
);

const PaginationPrevious = (props: ComponentProps<typeof PaginationLink>) => (
  <PaginationLink aria-label="Go to previous page" {...props}>
    <ArrowLeftIcon className="size-6" />
  </PaginationLink>
);

const PaginationNext = (props: ComponentProps<typeof PaginationLink>) => (
  <PaginationLink aria-label="Go to next page" {...props}>
    <ArrowRightIcon className="size-6" />
  </PaginationLink>
);

const PaginationEllipsis = ({
  className,
  ...props
}: ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("flex size-8 items-center justify-center", className)}
    data-slot="pagination-ellipsis"
    {...props}
  >
    <MoreHorizontalIcon className="size-6" />
    <span className="sr-only">More pages</span>
  </span>
);

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
