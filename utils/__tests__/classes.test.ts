import { describe, expect, it } from "vitest";
import { cn } from "@/utils/classes";

describe("cn", () => {
  it("concatenates plain strings", () => {
    expect(cn("foo", "bar")).toBe("foo bar");
  });

  it("filters out falsy values", () => {
    expect(cn("foo", false, undefined, "bar")).toBe("foo bar");
  });

  it("handles conditional objects", () => {
    expect(cn({ active: true, hidden: false })).toBe("active");
    expect(cn({ active: false })).toBe("");
  });

  it("handles arrays of class names", () => {
    expect(cn(["px-4", "py-2"])).toBe("px-4 py-2");
  });

  it("merges conflicting Tailwind classes — last wins", () => {
    expect(cn("p-4", "px-2")).toBe("p-4 px-2");
    expect(cn("text-red-500", "text-blue-500")).toBe("text-blue-500");
  });

  it("handles mixed input types together", () => {
    const result = cn("base", { active: true }, ["extra"], false, undefined);
    expect(result).toBe("base active extra");
  });

  it("returns an empty string when given no truthy values", () => {
    expect(cn(false, undefined)).toBe("");
    expect(cn()).toBe("");
  });
});
