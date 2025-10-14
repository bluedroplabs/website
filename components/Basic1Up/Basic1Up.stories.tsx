import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Basic1Up } from "./Basic1Up";
import { BASIC_1_UP_EXAMPLE_PROPS } from "./Basic1Up.examples";

const meta: Meta<typeof Basic1Up> = {
  title: "Organisms/Basic 1-Up",
  component: Basic1Up,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Basic1Up>;

export const Default: Story = { args: BASIC_1_UP_EXAMPLE_PROPS.default };
