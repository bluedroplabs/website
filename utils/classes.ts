import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names and merges Tailwind CSS classes.
 *
 * @param inputs - Strings, arrays, conditional objects, or booleans
 * @returns Merged class string
 */
export const cn = (
  ...inputs: (
    | boolean
    | Record<string, boolean | undefined>
    | string
    | string[]
    | undefined
  )[]
) => twMerge(clsx(inputs));
