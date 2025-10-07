/**
 * Checks if a URL is an external link.
 * @param url - The URL string to check.
 * @returns True if the URL is an external link, false otherwise.
 */
export const isExternalLink = (url: string): boolean => {
  try {
    const link = new URL(url, window.location.href);
    return link.origin !== window.location.origin;
  } catch {
    return false;
  }
};
