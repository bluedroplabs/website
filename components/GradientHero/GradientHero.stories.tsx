import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { GradientHero } from "./GradientHero";
import { GRADIENT_HERO_EXAMPLE_PROPS } from "./GradientHero.examples";

const meta: Meta<typeof GradientHero> = {
  title: "Organisms/Gradient Hero",
  component: GradientHero,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof GradientHero>;
export const Default: Story = { args: GRADIENT_HERO_EXAMPLE_PROPS.default };
