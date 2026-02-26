import { describe, expect, it } from "vitest";
import { isExternalLink } from "@/utils/validation";

describe("isExternalLink", () => {
  describe("relative paths", () => {
    it("returns false for root-relative paths", () => {
      expect(isExternalLink("/")).toBe(false);
      expect(isExternalLink("/about")).toBe(false);
      expect(isExternalLink("/blog/post-slug")).toBe(false);
    });

    it("returns false for dot-relative paths", () => {
      expect(isExternalLink("./sibling")).toBe(false);
      expect(isExternalLink("../parent")).toBe(false);
    });
  });

  describe("absolute URLs", () => {
    it("returns true for https URLs on a different origin", () => {
      expect(isExternalLink("https://google.com")).toBe(true);
      expect(isExternalLink("https://example.com/path?q=1")).toBe(true);
    });

    it("returns true for http URLs on a different origin", () => {
      expect(isExternalLink("http://example.com")).toBe(true);
    });

    it("returns false for URLs matching the current origin (http://localhost)", () => {
      expect(isExternalLink("http://localhost")).toBe(false);
      expect(isExternalLink("http://localhost/page")).toBe(false);
      expect(isExternalLink("http://localhost:80/")).toBe(false);
    });

    it("returns true for https://localhost (different protocol = different origin)", () => {
      expect(isExternalLink("https://localhost")).toBe(true);
    });
  });

  describe("protocol-relative URLs", () => {
    // NOTE: the function checks startsWith("/") before startsWith("//"),
    // so protocol-relative URLs are treated as root-relative (internal).
    // This documents the current behavior; update if the function is fixed.
    it("returns false for // prefixed URLs (caught by startsWith('/') guard first)", () => {
      expect(isExternalLink("//cdn.example.com/asset.js")).toBe(false);
      expect(isExternalLink("//fonts.googleapis.com/css2")).toBe(false);
    });
  });

  describe("special protocols", () => {
    it("returns true for mailto: links", () => {
      expect(isExternalLink("mailto:hello@example.com")).toBe(true);
    });

    it("returns true for tel: links", () => {
      expect(isExternalLink("tel:+15551234567")).toBe(true);
    });

    it("returns true for other colon-containing strings", () => {
      expect(isExternalLink("ftp://files.example.com")).toBe(true);
    });
  });

  describe("edge cases", () => {
    it("returns false for bare relative strings without slashes or protocol", () => {
      expect(isExternalLink("page")).toBe(false);
    });

    it("returns false when URL construction throws (malformed URL)", () => {
      expect(isExternalLink("http://")).toBe(false);
    });
  });
});
