import type { themes } from "./../contants/theme";
import type { TPageComponentType } from "./page.types";
/**
 * Breakpoint-based sizes for responsive design.
 */
export type TBreakpointSize = "sm" | "md" | "lg" | "xl" | "2xl";

/**
 * Theme options for the application.
 */
export type TTheme = (typeof themes)[number];

/**
 * Utility type to add a `type` property to an object.
 */
// export type WithType<T = Record<string, unknown>> = T & { type: string };
export type WithType<A> = A extends { type?: TPageComponentType } ? A : never;
