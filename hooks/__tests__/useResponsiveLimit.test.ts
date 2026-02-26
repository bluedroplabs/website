import { renderHook, act } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { useResponsiveLimit } from "@/hooks/useResponsiveLimit";

function setWindowWidth(width: number) {
  Object.defineProperty(window, "innerWidth", {
    writable: true,
    configurable: true,
    value: width,
  });
  window.dispatchEvent(new Event("resize"));
}

describe("useResponsiveLimit", () => {
  const BASE_LIMIT = 6;

  beforeEach(() => {
    setWindowWidth(1440);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("returns the base limit on desktop viewports (>= 1024px)", () => {
    setWindowWidth(1440);
    const { result } = renderHook(() => useResponsiveLimit(BASE_LIMIT));
    expect(result.current).toBe(BASE_LIMIT);
  });

  it("returns 11 on the md viewport (768–1023px)", () => {
    setWindowWidth(900);
    const { result } = renderHook(() => useResponsiveLimit(BASE_LIMIT));
    expect(result.current).toBe(11);
  });

  it("returns the base limit on mobile viewports (< 768px)", () => {
    setWindowWidth(375);
    const { result } = renderHook(() => useResponsiveLimit(BASE_LIMIT));
    expect(result.current).toBe(BASE_LIMIT);
  });

  it("updates the limit when the viewport crosses into the md breakpoint", () => {
    setWindowWidth(1440);
    const { result } = renderHook(() => useResponsiveLimit(BASE_LIMIT));
    expect(result.current).toBe(BASE_LIMIT);

    act(() => setWindowWidth(800));
    expect(result.current).toBe(11);
  });

  it("restores the base limit when viewport crosses back above 1024px", () => {
    setWindowWidth(800);
    const { result } = renderHook(() => useResponsiveLimit(BASE_LIMIT));
    expect(result.current).toBe(11);

    act(() => setWindowWidth(1280));
    expect(result.current).toBe(BASE_LIMIT);
  });

  it("removes the resize listener on unmount (no state updates after unmount)", () => {
    const removeEventListenerSpy = vi.spyOn(window, "removeEventListener");
    setWindowWidth(1440);
    const { unmount } = renderHook(() => useResponsiveLimit(BASE_LIMIT));
    unmount();
    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      "resize",
      expect.any(Function),
    );
  });
});
