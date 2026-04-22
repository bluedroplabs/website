import type { IFeaturedSolutionsRow } from "./FeaturedSolutionsRow.types";

const FEATURED_SOLUTIONS_ROW_DEFAULT_PROPS: IFeaturedSolutionsRow = {
  title: "Don't Just Survive on Drupal 7 — <em>Thrive on Drupal 7</em>",
  description:
    "While others might pressure you to migrate, we help you maximize your investment. Your Drupal 7 site can continue to grow and improve.",
  solutions: [
    {
      title: "Module Development",
      description: "Custom functionality to meet evolving business needs.",
      image: {
        alt: "Module Development",
        src: "https://picsum.photos/512/260?random=1",
      },
    },
    {
      title: "Theme Design",
      description: "Modern design updates without full rebuilds.",
      image: {
        alt: "Theme Design",
        src: "https://picsum.photos/512/260?random=2",
      },
    },
    {
      title: "SEO and Content Marketing",
      description:
        "Uncover issues that might be affecting your rankings and attract more customers.",
      image: {
        alt: "SEO and Content Marketing",
        src: "https://picsum.photos/512/260?random=3",
      },
    },
  ],
};

export const FEATURED_SOLUTIONS_ROW_EXAMPLE_PROPS = {
  default: FEATURED_SOLUTIONS_ROW_DEFAULT_PROPS,
};
