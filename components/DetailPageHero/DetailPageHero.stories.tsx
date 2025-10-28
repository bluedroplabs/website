import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { DetailPageHero } from "./DetailPageHero";
import { DETAIL_PAGE_HERO_EXAMPLE_PROPS } from "./DetailPageHero.examples";

const meta: Meta<typeof DetailPageHero> = {
  title: "Organisms/Detail Page Hero",
  component: DetailPageHero,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DetailPageHero>;

export const Default: Story = { args: DETAIL_PAGE_HERO_EXAMPLE_PROPS.default };
