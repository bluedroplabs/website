import type { IDetailPageHero } from "./DetailPageHero.types";

const DETAIL_PAGE_HERO_DEFAULT_PROPS: IDetailPageHero = {
  author: "Matt Robison",
  date: "September 26, 2025",
  eyebrow: "Article",
  image: {
    src: "https://picsum.photos/1000/1000?random=1",
    alt: "Detail Page Hero Example Image",
  },
  title: "Building a powerful portal for Stacker’s digital presence",
};

export const DETAIL_PAGE_HERO_EXAMPLE_PROPS = {
  default: DETAIL_PAGE_HERO_DEFAULT_PROPS,
};
