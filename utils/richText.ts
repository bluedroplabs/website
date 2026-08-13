/**
 * Canvas block rich-text fields wrap edited values in paragraphs. Paragraphs
 * are invalid inside semantic headings, so preserve inline markup while
 * converting additional paragraphs into explicit line breaks.
 */
export const normalizeRichTextHeading = (value: string) =>
  value
    .replace(/<\/p>\s*<p(?:\s[^>]*)?>/gi, "<br />")
    .replace(/<\/?p(?:\s[^>]*)?>/gi, "");
