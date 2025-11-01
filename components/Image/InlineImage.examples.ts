import type { IInlineImage } from "./InlineImage.types";

const INLINE_IMAGE_DEFAULT_PROPS: IInlineImage = {
  image: {
    src: "https://picsum.photos/1000/600/",
    alt: "Example inline image",
    width: 1000,
    height: 600,
  },
};

export const INLINE_IMAGE_EXAMPLE_PROPS = {
  default: INLINE_IMAGE_DEFAULT_PROPS,
};
