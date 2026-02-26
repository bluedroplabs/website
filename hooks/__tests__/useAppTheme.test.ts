import { renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { useAppTheme } from "@/hooks/useAppTheme";

import { useTheme as useNextTheme } from "next-themes";

const mockUseTheme = vi.mocked(useNextTheme);

describe("useAppTheme", () => {
  it("detects system theme as light when matchMedia returns false", () => {
    mockUseTheme.mockReturnValue({
      theme: "system",
      setTheme: vi.fn(),
      resolvedTheme: "light",
      themes: [],
      systemTheme: "light",
      forcedTheme: undefined,
    });
    const { result } = renderHook(() => useAppTheme());
    expect(result.current.isDarkMode).toBe(false);
  });

  it("returns isDarkMode=true when theme is explicitly 'dark'", () => {
    mockUseTheme.mockReturnValue({
      theme: "dark",
      setTheme: vi.fn(),
      resolvedTheme: "dark",
      themes: [],
      systemTheme: "dark",
      forcedTheme: undefined,
    });
    const { result } = renderHook(() => useAppTheme());
    expect(result.current.isDarkMode).toBe(true);
  });

  it("returns isDarkMode=false when theme is explicitly 'light'", () => {
    mockUseTheme.mockReturnValue({
      theme: "light",
      setTheme: vi.fn(),
      resolvedTheme: "light",
      themes: [],
      systemTheme: "light",
      forcedTheme: undefined,
    });
    const { result } = renderHook(() => useAppTheme());
    expect(result.current.isDarkMode).toBe(false);
  });

  it("exposes setTheme from next-themes", () => {
    const setThemeSpy = vi.fn();
    mockUseTheme.mockReturnValue({
      theme: "light",
      setTheme: setThemeSpy,
      resolvedTheme: "light",
      themes: [],
      systemTheme: "light",
      forcedTheme: undefined,
    });
    const { result } = renderHook(() => useAppTheme());
    result.current.setTheme("dark");
    expect(setThemeSpy).toHaveBeenCalledWith("dark");
  });
});
