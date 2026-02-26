/// <reference types="vitest" />
import type { TestingLibraryMatchers } from "@testing-library/jest-dom/matchers";
import type { AxeMatchers } from "vitest-axe/matchers";

declare module "vitest" {
  interface Assertion<R = unknown>
    extends TestingLibraryMatchers<R, void>,
      AxeMatchers {}
  interface AsymmetricMatchersContaining
    extends TestingLibraryMatchers,
      AxeMatchers {}
}
