import type { IFooter } from "./Footer.types";

const FOOTER_DEFAULT_PROPS: IFooter = {
  copyright: "© Blue Drop Labs 2025. All rights reserved.",
  darkLogo: {
    src: "/assets/logo-dark.svg",
    alt: "Company Dark Logo",
  },
  description:
    "High-performance hosting, expert development, and ongoing support.",
  formAction: "#",
  formDescription:
    "Lorem ipsum dolor sit amet consectetur. Integer viverra pellentesque posuere lorem.",
  formHeading: "Join our community",
  logo: {
    src: "/assets/logo.svg",
    alt: "Company Logo",
  },
  primaryLinks: [
    {
      title: "Company",
      links: [
        { href: "#", children: "About" },
        { href: "#", children: "Contact" },
        { href: "#", children: "Resources" },
      ],
    },
    {
      title: "Connect with us",
      links: [
        {
          href: "mailto:hello@bluedroplabs.com",
          children: "hello@bluedroplabs.com",
        },
        { href: "tel:+18002329495453", children: "+1800 2329495453" },
        { href: "#", children: "Linkedin" },
        { href: "#", children: "Github" },
      ],
    },
  ],
  secondaryText: "We ♥️ Open Source",
  title: "Lorem Ipsum",
  utilityLinks: [
    { href: "#", children: "Terms of Use" },
    { href: "#", children: "Privacy Policy" },
    { href: "#", children: "Sitemap" },
  ],
};

export const FOOTER_EXAMPLE_PROPS = {
  default: FOOTER_DEFAULT_PROPS,
};
