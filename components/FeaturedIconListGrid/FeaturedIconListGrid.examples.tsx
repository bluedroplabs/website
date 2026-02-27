import type { IFeaturedIconListGrid } from "./FeaturedIconListGrid.types";

export const FEATURED_ICON_LIST_GRID_EXAMPLE_PROPS: {
  default: IFeaturedIconListGrid;
} = {
  default: {
    eyebrow: "Design in Figma",
    title: "Bring your product ideas to life visually",
    description:
      "Use Figma to quickly explore concepts, collaborate with your team, and hand off precise specs to engineers.",
    items: [
      {
        icon: "figma",
        title: "Collaborative design",
        description:
          "Design together in real time and keep everyone aligned on the latest version.",
      },
      {
        icon: "component",
        title: "Reusable components",
        description:
          "Build robust design systems with variants, tokens, and clear documentation.",
      },
      {
        icon: "handoff",
        title: "Smooth handoff",
        description:
          "Developers get accurate specs, assets, and examples directly from the design file.",
      },
    ],
  },
};
