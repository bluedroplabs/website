"use client";

import { cn } from "@/utils";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../DropdownMenu/DropdownMenu";
import type { IMultiSelect } from "./MultiSelect.types";

export const MultiSelect = ({
  className,
  label,
  onChange,
  selections,
  ...props
}: IMultiSelect) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  if (!selections || selections.length === 0) return null;

  const handleSelect = (e: Event, value: string) => {
    e.preventDefault();

    const newSelectedItems = selectedItems.includes(value)
      ? selectedItems.filter((item) => item !== value)
      : [...selectedItems, value];

    setSelectedItems(newSelectedItems);
    onChange?.(newSelectedItems);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          "border border-button-default-bg font-medium font-mono leading-[1] px-8 py-4.75 uppercase hover:bg-button-default-bg-hover hover:text-button-default-bg-hover-text",
          className,
        )}
        {...props}
      >
        {label}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {selections.map(({ label, options }) => (
          <div key={label}>
            <DropdownMenuLabel>{label}</DropdownMenuLabel>
            {options.map(({ label, value }) => (
              <DropdownMenuCheckboxItem
                checked={selectedItems.includes(value)}
                key={value}
                onSelect={(e) => handleSelect(e, value)}
              >
                {label}
              </DropdownMenuCheckboxItem>
            ))}
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
