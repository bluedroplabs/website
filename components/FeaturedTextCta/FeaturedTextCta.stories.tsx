import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FeaturedTextCta } from "./FeaturedTextCta";
import { FEATURED_TEXT_CTA_EXAMPLE_PROPS } from "./FeaturedTextCta.examples";

const meta: Meta<typeof FeaturedTextCta> = {
  title: "Organisms/Featured Text Cta",
  component: FeaturedTextCta,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FeaturedTextCta>;

export const Default: Story = { args: FEATURED_TEXT_CTA_EXAMPLE_PROPS.default };
export const Heading: Story = { args: FEATURED_TEXT_CTA_EXAMPLE_PROPS.heading };
export const TextOnly: Story = { args: FEATURED_TEXT_CTA_EXAMPLE_PROPS.noCta };
