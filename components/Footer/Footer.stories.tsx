import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Footer } from "./Footer";
import { FOOTER_EXAMPLE_PROPS } from "./Footer.examples";

const meta: Meta<typeof Footer> = {
  title: "Organisms/Footer",
  component: Footer,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = { args: FOOTER_EXAMPLE_PROPS.default };
