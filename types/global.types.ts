import type { themes } from "./../contants/theme";
/**
 * Breakpoint-based sizes for responsive design.
 */
export type TBreakpointSize = "sm" | "md" | "lg" | "xl";

/**
 * Theme options for the application.
 */
export type TTheme = (typeof themes)[number];
