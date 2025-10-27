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
export interface IMultiSelect extends HTMLAttributes<HTMLButtonElement> {
  label: string;
  selections: IMultiSelectSelection[];
}
