import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ContactForm } from "./ContactForm";
import { CONTACT_FORM_EXAMPLE_PROPS } from "./ContactForm.examples";

const meta: Meta<typeof ContactForm> = {
  title: "Organisms/Contact Form",
  component: ContactForm,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ContactForm>;

export const Default: Story = { args: CONTACT_FORM_EXAMPLE_PROPS.default };
export const Minimal: Story = { args: CONTACT_FORM_EXAMPLE_PROPS.minimal };
