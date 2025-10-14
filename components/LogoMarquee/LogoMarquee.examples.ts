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
  ],
};

export const LOGO_MARQUEE_EXAMPLE_PROPS = {
  default: LOGO_MARQUEE_DEFAULT_PROPS,
};
