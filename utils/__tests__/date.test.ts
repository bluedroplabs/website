import { describe, expect, it } from "vitest";
import { formatDateTimeAttribute } from "@/utils/date";

describe("formatDateTimeAttribute", () => {
  it("returns a valid ISO string for a full ISO date input", () => {
    const result = formatDateTimeAttribute("2024-03-15");
    expect(result).toBe(new Date("2024-03-15").toISOString());
  });

  it("returns ISO string for a year-only string", () => {
    const result = formatDateTimeAttribute("2024");
    expect(result).toBe(new Date("2024-01-01").toISOString());
  });

  it("returns ISO string for a Month Year string", () => {
    const result = formatDateTimeAttribute("January 2024");
    expect(new Date(result).getFullYear()).toBe(2024);
    expect(result).toMatch(/^\d{4}-\d{2}-\d{2}T/);
  });

  it("returns ISO string for a full date-time string", () => {
    const result = formatDateTimeAttribute("2024-06-15T10:30:00Z");
    expect(result).toBe(new Date("2024-06-15T10:30:00Z").toISOString());
  });

  it("falls back to the original string for completely unparseable input", () => {
    // "not-a-date" → new Date("not-a-date") is NaN,
    // /^\d{4}$/.test("not-a-date") is false,
    // final new Date("not-a-date").toISOString() throws → returns original
    const result = formatDateTimeAttribute("not-a-date");
    expect(result).toBe("not-a-date");
  });
});
