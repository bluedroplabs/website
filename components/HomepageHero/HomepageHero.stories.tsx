import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { HomepageHero } from "./HomepageHero";
import { HOMEPAGE_HERO_EXAMPLE_PROPS } from "./HomepageHero.examples";

const meta: Meta<typeof HomepageHero> = {
  title: "Organisms/Homepage Hero",
  component: HomepageHero,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof HomepageHero>;
export const Default: Story = { args: HOMEPAGE_HERO_EXAMPLE_PROPS.default };
