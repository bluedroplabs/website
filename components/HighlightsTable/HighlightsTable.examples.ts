import type { IHighlightsTable } from "./HighlightsTable.types";

const HIGHLIGHTS_TABLE_DEFAULT_PROPS: IHighlightsTable = {
  className: "max-w-180",
  highlights: [
    {
      title: "Lightning-Fast Performance",
      description:
        "Achieved sub-10 millisecond response times worldwide by serving static HTML, CSS, and JavaScript files through Cloudflare's edge network.",
    },
    {
      title: "Enhanced Security",
      description:
        "By serving only static files, there is no publicly-accessible backend to exploit.",
    },
    {
      title: "Flexible Content Management",
      description:
        "Content can be sourced from YAML files, Drupal, Strapi, WordPress, or other CMS platforms without rebuilding the frontend.",
    },
    {
      title: "Cost Reduction",
      description:
        "By leveraging Cloudflare, we eliminate the need for complex server infrastructure and urgent security updates.",
    },
  ],
  title: "Key Highlights",
};

export const HIGHLIGHTS_TABLE_EXAMPLE_PROPS = {
  default: HIGHLIGHTS_TABLE_DEFAULT_PROPS,
};
