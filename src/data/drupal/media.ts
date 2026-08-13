import { getDraftConfig } from "@drupal-canvas/headless-astro";

export interface CanvasImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export function resolveDrupalMediaUrl(src?: string): string | undefined {
  if (!src || /^(?:data:|https?:\/\/)/i.test(src)) return src;
  return new URL(src, `${getDraftConfig().baseUrl}/`).toString();
}

export function resolveDrupalImage<T extends CanvasImage>(image: T): T {
  return {
    ...image,
    src: resolveDrupalMediaUrl(image.src) ?? image.src,
  };
}
