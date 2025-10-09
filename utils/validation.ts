/**
 * Checks if a URL is an external link.
 * @param url - The URL string to check.
 * @returns True if the URL is an external link, false otherwise.
 */
export const isExternalLink = (url: string): boolean => {
  try {
    // Handle relative URLs - they are internal
    if (url.startsWith("/") || url.startsWith("./") || url.startsWith("../")) {
      return false;
    }

    // Handle protocol-relative URLs
    if (url.startsWith("//")) {
      return true;
    }

    // Handle absolute URLs with protocol
    if (url.startsWith("http://") || url.startsWith("https://")) {
      // Only check origin if we're in a browser environment
      if (typeof window !== "undefined") {
        const link = new URL(url);
        return link.origin !== window.location.origin;
      }
      // On server side, assume external if it has a protocol
      return true;
    }

    // Handle other protocols (mailto:, tel:, etc.)
    if (url.includes(":")) {
      return true;
    }

    // Default to internal for relative paths
    return false;
  } catch {
    return false;
  }
};
