import { RESOURCE_CARD_EXAMPLE_PROPS } from "../ResourceCard/ResourceCard.examples";
import type { IRelatedArticles } from "./RelatedArticles.types";

const RELATED_ARTICLES_DEFAULT_PROPS: IRelatedArticles = {
  items: [
    RESOURCE_CARD_EXAMPLE_PROPS.default,
    RESOURCE_CARD_EXAMPLE_PROPS.default,
    RESOURCE_CARD_EXAMPLE_PROPS.default,
  ].map((item, index) => ({
    ...item,
    className: "",
    image: {
      src: `https://picsum.photos/1000/1000?random=${index}`,
      alt: `Related Article Example Image ${index + 1}`,
    },
  })),
  title: "Related Articles",
};

export const RELATED_ARTICLES_EXAMPLE_PROPS = {
  default: RELATED_ARTICLES_DEFAULT_PROPS,
};
