import type { IContactForm } from "./ContactForm.types";

const CONTACT_FORM_DEFAULT_PROPS: IContactForm = {
  contactTitle: "Talk to our team",
  contactDescription:
    "We're a small, senior team that responds quickly and works directly with you — no layers, no handoffs.",
  contactEmail: "hello@bluedroplabs.com",
  contactEmailHref: "mailto:hello@bluedroplabs.com",
  formAction: "/api/contact",
  bookCallLink: {
    children: "Book a call",
    href: "#",
  },
  fields: [
    {
      name: "fullName",
      label: "Full Name",
      type: "text",
      required: true,
    },
    {
      name: "email",
      label: "Email address",
      type: "email",
      placeholder: "example@email.com",
      required: true,
    },
    {
      name: "company",
      label: "Company",
      type: "text",
      labelSuffix: "(optional)",
    },
    {
      name: "message",
      label: "How can we help?",
      type: "textarea",
      placeholder: "Write your message here",
      required: true,
    },
  ],
  submitButtonText: "SEND MESSAGE",
};

const CONTACT_FORM_MINIMAL_PROPS: IContactForm = {
  contactTitle: "Get in touch",
  contactDescription: "Send us a message and we'll get back to you soon.",
  formAction: "/api/contact",
  fields: [
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      required: true,
    },
    {
      name: "message",
      label: "Message",
      type: "textarea",
      required: true,
    },
  ],
};

export const CONTACT_FORM_EXAMPLE_PROPS = {
  default: CONTACT_FORM_DEFAULT_PROPS,
  minimal: CONTACT_FORM_MINIMAL_PROPS,
};
