import { cn } from "@/utils";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ResourceCard } from "./ResourceCard";
import { RESOURCE_CARD_EXAMPLE_PROPS } from "./ResourceCard.examples";

const meta: Meta<typeof ResourceCard> = {
  title: "Molecules/Resource Card",
  component: ResourceCard,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  render: (args) => (
    <div
      className={cn("w-full", args.variant === "default" && "md:max-w-106.5")}
    >
      <ResourceCard {...args} />
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof ResourceCard>;
export const Default: Story = { args: RESOURCE_CARD_EXAMPLE_PROPS.default };
