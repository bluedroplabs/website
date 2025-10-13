import type { IFeaturedSolutionsGrid } from "./FeaturedSolutionsGrid.types";

const FEATURED_SOLUTIONS_GRID_DEFAULT_PROPS: IFeaturedSolutionsGrid = {
  description:
    "From legacy maintenance to cutting-edge development, we handle everything so you can focus on your business.",
  primaryCTA: { children: "View all solutions", href: "/" },
  title: "We're <strong>Drupal</strong> experts who set you up to scale",
  solutions: [
    {
      eyebrow: "Drupal + WordPress Managed Hosting",
      title: "Keep your Drupal 7 platform safe and running smoothly",
      description: "Tempus leo eu aenean sed diam urna tempor.",
      href: "/",
      image: {
        alt: "Drupal + WordPress Managed Hosting",
        src: "https://picsum.photos/600/600?random=1",
      },
    },
    {
      eyebrow: "Drupal 7 support",
      title: "Keep your Drupal 7 platform safe and running smoothly",
      description: "Tempus leo eu aenean sed diam urna tempor.",
      href: "/",
      image: {
        alt: "Drupal 7 support",
        src: "https://picsum.photos/600/600?random=2",
      },
    },
    {
      eyebrow: "Drupal + WordPress Support",
      title: "Ongoing support and maintenance from experienced developers",
      description: "Tempus leo eu aenean sed diam urna tempor.",
      href: "/",
      image: {
        alt: "Drupal + WordPress Support",
        src: "https://picsum.photos/600/600?random=3",
      },
    },
    {
      eyebrow: "API + Custom Development",
      title:
        "Build scalable web applications and APIs that power your business growth",
      description: "Tempus leo eu aenean sed diam urna tempor.",
      href: "/",
      image: {
        alt: "API + Custom Development",
        src: "https://picsum.photos/600/600?random=4",
      },
    },
    {
      eyebrow: "Design + Experience",
      title: "Turn your brand into a digital experience that converts",
      description: "Tempus leo eu aenean sed diam urna tempor.",
      href: "/",
      image: {
        alt: "Design + Experience",
        src: "https://picsum.photos/600/600?random=5",
      },
    },
    {
      eyebrow: "SEO + Marketing",
      title: "Optimize your website into a high-performing business asset",
      description: "Tempus leo eu aenean sed diam urna tempor.",
      href: "/",
      image: {
        alt: "SEO + Marketing",
        src: "https://picsum.photos/600/600?random=6",
      },
    },
  ],
};

export const FEATURED_SOLUTIONS_GRID_EXAMPLE_PROPS = {
  default: FEATURED_SOLUTIONS_GRID_DEFAULT_PROPS,
};
