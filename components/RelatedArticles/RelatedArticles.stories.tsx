import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { RelatedArticles } from "./RelatedArticles";
import { RELATED_ARTICLES_EXAMPLE_PROPS } from "./RelatedArticles.examples";

const meta: Meta<typeof RelatedArticles> = {
  title: "Organisms/Related Articles",
  component: RelatedArticles,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof RelatedArticles>;
export const Default: Story = { args: RELATED_ARTICLES_EXAMPLE_PROPS.default };
