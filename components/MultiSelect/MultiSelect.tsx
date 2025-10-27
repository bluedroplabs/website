"use client";

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../DropdownMenu/DropdownMenu";
import type { IMultiSelect } from "./MultiSelect.types";

export const MultiSelect = ({ label, selections, ...props }: IMultiSelect) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleSelect = (e: Event, value: string) => {
    e.preventDefault();

    setSelectedItems((prevSelected) =>
      prevSelected.includes(value)
        ? prevSelected.filter((item) => item !== value)
        : [...prevSelected, value],
    );
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="border border-button-default-bg font-medium font-mono px-8 py-5 uppercase hover:bg-button-default-bg-hover hover:text-button-default-bg-hover-text"
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
