import { RESOURCE_CARD_EXAMPLE_PROPS } from "../ResourceCard/ResourceCard.examples";
import type { IRelatedPosts } from "./RelatedPosts.types";

const RELATED_POSTS_DEFAULT_PROPS: IRelatedPosts = {
  items: [
    RESOURCE_CARD_EXAMPLE_PROPS.default,
    RESOURCE_CARD_EXAMPLE_PROPS.default,
    RESOURCE_CARD_EXAMPLE_PROPS.default,
  ].map((item, index) => ({
    ...item,
    className: "",
    image: {
      src: `https://picsum.photos/1000/1000?random=${index}`,
      alt: `Related Post Example Image ${index + 1}`,
    },
  })),
  title: "Related Posts",
};

export const RELATED_POSTS_EXAMPLE_PROPS = {
  default: RELATED_POSTS_DEFAULT_PROPS,
};
