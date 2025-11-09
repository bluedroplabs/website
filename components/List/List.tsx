"use client";

import { cn } from "@/utils/classes";
import type { IList } from "./List.types";

export const List = ({ className, items, ...props }: IList) => {
  if (!items || items.length === 0) return;

  return (
    <ul
      className={cn("space-y-3 text-size-16 lg:text-size-18", className)}
      {...props}
    >
      {items.map((item, index) => (
        <li
          className="flex items-center pl-6.25 relative before:absolute before:size-2.25 before:bg-brand-aqua before:left-0"
          key={index}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};
