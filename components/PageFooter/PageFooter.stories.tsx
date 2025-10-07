import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PageFooter } from "./PageFooter";
import { PAGE_FOOTER_EXAMPLE_PROPS } from "./PageFooter.examples";

const meta: Meta<typeof PageFooter> = {
  title: "Organisms/Page Footer",
  component: PageFooter,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PageFooter>;
export const Default: Story = { args: PAGE_FOOTER_EXAMPLE_PROPS.default };
