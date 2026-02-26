import * as jestDomMatchers from "@testing-library/jest-dom/matchers";
import { cleanup } from "@testing-library/react";
import * as axeMatchers from "vitest-axe/matchers";
import { afterEach, expect, vi } from "vitest";
import React from "react";

afterEach(() => cleanup());

expect.extend(jestDomMatchers);
expect.extend(axeMatchers);

vi.mock("next/link", () => ({
  default: ({
    href,
    children,
    ...props
  }: {
    href: string;
    children: React.ReactNode;
    [key: string]: unknown;
  }) => React.createElement("a", { href, ...props }, children),
}));

vi.mock("next/image", () => ({
  default: ({
    src,
    alt,
    width,
    height,
    ...props
  }: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    [key: string]: unknown;
  }) => React.createElement("img", { src, alt, width, height, ...props }),
}));

vi.mock("next/navigation", () => ({
  useRouter: vi.fn(() => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn(),
  })),
  usePathname: vi.fn(() => "/"),
  useSearchParams: vi.fn(() => new URLSearchParams()),
}));

vi.mock("next-themes", () => ({
  useTheme: vi.fn(() => ({
    theme: "system",
    setTheme: vi.fn(),
    resolvedTheme: "light",
  })),
  ThemeProvider: ({ children }: { children: React.ReactNode }) => children,
}));

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

globalThis.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

globalThis.IntersectionObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
})) as unknown as typeof IntersectionObserver;
