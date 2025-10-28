"use client";

import { cn } from "@/utils/classes";
import type { ISearchBar } from "./SearchBar.types";

export const SearchBar = ({
  className,
  placeholder,
  onSubmit,
  ...props
}: ISearchBar) => {
  return (
    <form
      className={cn(
        "bg-surface-input border-b border-border-strong flex gap-x-2.5 justify-between px-5 py-4.5",
        className,
      )}
      onSubmit={onSubmit}
    >
      <input
        className="leading-[1.25] w-full placeholder:text-default-light"
        name="search"
        placeholder={placeholder}
        type="search"
        {...props}
      />
      <button
        className="font-mono bg-transparent leading-[1.25] p-0 text-default-heading uppercase"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};
