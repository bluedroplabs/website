import { RESOURCE_CARD_EXAMPLE_PROPS } from "../ResourceCard/ResourceCard.examples";
import type { ICardGrid } from "./CardGrid.types";

const CARD_GRID_DEFAULT_PROPS: ICardGrid = {
  filters: [
    {
      label: "Resource Type",
      name: "type",
      selections: [
        {
          label: "Resource Type",
          options: [
            { label: "Blog", value: "blog" },
            { label: "Whitepaper", value: "whitepaper" },
            { label: "Article", value: "article" },
            { label: "Report", value: "report" },
            { label: "Case Study", value: "case-study" },
          ],
        },
      ],
    },
    {
      label: "Topic",
      name: "topic",
      selections: [
        {
          label: "Topic",
          options: [
            { label: "UX/UI", value: "ui-ux" },
            { label: "Drupal", value: "drupal" },
            { label: "WordPress", value: "wordpress" },
            { label: "CMS", value: "cms" },
          ],
        },
      ],
    },
  ],
  items: [
    RESOURCE_CARD_EXAMPLE_PROPS.default,
    RESOURCE_CARD_EXAMPLE_PROPS.default,
    RESOURCE_CARD_EXAMPLE_PROPS.default,
    RESOURCE_CARD_EXAMPLE_PROPS.default,
    RESOURCE_CARD_EXAMPLE_PROPS.default,
    RESOURCE_CARD_EXAMPLE_PROPS.default,
    RESOURCE_CARD_EXAMPLE_PROPS.default,
    RESOURCE_CARD_EXAMPLE_PROPS.default,
    RESOURCE_CARD_EXAMPLE_PROPS.default,
    RESOURCE_CARD_EXAMPLE_PROPS.default,
  ].map((item, index) => ({
    ...item,
    image: {
      src: `https://picsum.photos/1000/1000?random=${index}`,
      alt: `Resource Card Example Image ${index + 1}`,
    },
  })),
  limit: 10,
  total: 80,
  updateCards: async () => [],
};

export const CARD_GRID_EXAMPLE_PROPS = {
  default: CARD_GRID_DEFAULT_PROPS,
};
