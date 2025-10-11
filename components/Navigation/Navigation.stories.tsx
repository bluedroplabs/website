import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Navigation } from "./Navigation";
import { NAVIGATION_EXAMPLE_PROPS } from "./Navigation.examples";

const meta: Meta<typeof Navigation> = {
  title: "Organisms/Navigation",
  component: Navigation,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Navigation>;
export const Default: Story = { args: NAVIGATION_EXAMPLE_PROPS.default };
