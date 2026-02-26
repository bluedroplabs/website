import { renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useIsMounted } from "@/hooks/useIsMounted";

describe("useIsMounted", () => {
  it("returns true after the component mounts", () => {
    const { result } = renderHook(() => useIsMounted());
    expect(result.current).toBe(true);
  });

  it("remains true across re-renders", () => {
    const { result, rerender } = renderHook(() => useIsMounted());
    rerender();
    rerender();
    expect(result.current).toBe(true);
  });

  it("the value at unmount time is still true", () => {
    const { result, unmount } = renderHook(() => useIsMounted());
    expect(result.current).toBe(true);
    unmount();
    expect(result.current).toBe(true);
  });
});
