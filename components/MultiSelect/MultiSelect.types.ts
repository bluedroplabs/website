import type { HTMLAttributes } from "react";

export interface IMultiSelectOption {
  label: string;
  value: string;
  checked?: boolean;
}

export interface IMultiSelectSelection {
  label: string;
  options: IMultiSelectOption[];
}

/**
 * Props for the MultiSelect component.
 */
export interface IMultiSelect extends Omit<
  HTMLAttributes<HTMLButtonElement>,
  "onChange"
> {
  label: string;
  name: string;
  selections: IMultiSelectSelection[];
  onChange?: (selectedValues: string[]) => void;
}
