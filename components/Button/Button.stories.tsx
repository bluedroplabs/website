import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "./Button";
import { BUTTON_EXAMPLE_PROPS } from "./Button.examples";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = { args: BUTTON_EXAMPLE_PROPS.default };
