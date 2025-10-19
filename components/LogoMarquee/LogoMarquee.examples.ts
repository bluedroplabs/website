import type { ILogoMarquee } from "./LogoMarquee.types";

const LOGO_MARQUEE_DEFAULT_PROPS: ILogoMarquee = {
  description:
    "Invest in your growth and success ——— Trusted by our beloved clients",
  logos: [
    {
      alt: "Client Logo 1",
      src: "https://picsum.photos/131/67",
      width: 131,
      height: 67,
      priority: true,
    },
    {
      alt: "Client Logo 2",
      src: "https://picsum.photos/110/54",
      width: 110,
      height: 54,
      priority: true,
    },
    {
      alt: "Client Logo 3",
      src: "https://picsum.photos/145/60",
      width: 145,
      height: 60,
      priority: true,
    },
    {
      alt: "Client Logo 4",
      src: "https://picsum.photos/120/60",
      width: 120,
      height: 60,
      priority: true,
    },
    {
      alt: "Client Logo 5",
      src: "https://picsum.photos/130/60",
      width: 130,
      height: 60,
      priority: true,
    },
    {
      alt: "Client Logo 6",
      src: "https://picsum.photos/140/60",
      width: 140,
      height: 60,
      priority: true,
    },
    {
      alt: "Client Logo 7",
      src: "https://picsum.photos/150/60",
      width: 150,
      height: 60,
      priority: true,
    },
    {
      alt: "Client Logo 8",
      src: "https://picsum.photos/160/60",
      width: 160,
      height: 60,
      priority: true,
    },
  ],
};

export const LOGO_MARQUEE_EXAMPLE_PROPS = {
  default: LOGO_MARQUEE_DEFAULT_PROPS,
};
