import type Image from "next/image";

export interface IImage extends React.ComponentProps<typeof Image> {
  /**
   * The source URL of the image.
   */
  src: string;

  /**
   * The alternative text for the image, used for accessibility.
   */
  alt: string;

  /**
   * Optional width of the image in pixels.
   */
  width?: number;

  /**
   * Optional height of the image in pixels.
   */
  height?: number;
}
