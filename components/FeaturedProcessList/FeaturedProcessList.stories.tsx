import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FeaturedProcessList } from "./FeaturedProcessList";
import { FEATURED_PROCESS_LIST_EXAMPLE_PROPS } from "./FeaturedProcessList.examples";

const meta: Meta<typeof FeaturedProcessList> = {
  title: "Organisms/Featured Process List",
  component: FeaturedProcessList,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FeaturedProcessList>;

export const Default: Story = {
  args: FEATURED_PROCESS_LIST_EXAMPLE_PROPS.default,
};
