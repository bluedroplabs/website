import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { RelatedPosts } from "./RelatedPosts";
import { RELATED_POSTS_EXAMPLE_PROPS } from "./RelatedPosts.examples";

const meta: Meta<typeof RelatedPosts> = {
  title: "Organisms/Related Posts",
  component: RelatedPosts,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof RelatedPosts>;
export const Default: Story = { args: RELATED_POSTS_EXAMPLE_PROPS.default };
