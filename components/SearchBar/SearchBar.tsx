"use client";

import { cn } from "@/utils/classes";
import type { ISearchBar } from "./SearchBar.types";

export const SearchBar = ({ className, placeholder, ...props }: ISearchBar) => {
  return (
    <div
      className={cn(
        "bg-surface-input border-b border-border-strong flex gap-x-2.5 justify-between px-5 py-4.5",
        className,
      )}
      {...props}
    >
      <input
        className="leading-[1.25] w-full placeholder:text-default-light"
        placeholder={placeholder}
        type="search"
      />
      <button
        className="font-mono bg-transparent leading-[1.25] p-0 text-default-heading uppercase"
        type="submit"
      >
        Search
      </button>
    </div>
  );
};
