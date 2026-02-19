import type { ICTA } from "@/types/cta.types";
import type { HTMLAttributes } from "react";

/**
 * Form field configuration.
 */
export interface IContactFormField {
  /**
   * Unique identifier for the field (used as name and id).
   */
  name: string;

  /**
   * Label text displayed above the input.
   */
  label: string;

  /**
   * Input type (text, email, tel, textarea, etc.).
   */
  type?: "text" | "email" | "tel" | "textarea" | "number";

  /**
   * Placeholder text for the input.
   */
  placeholder?: string;

  /**
   * Whether the field is required.
   */
  required?: boolean;

  /**
   * Additional text shown in the label (e.g., "(optional)").
   */
  labelSuffix?: string;
}

/**
 * Props for the ContactForm component.
 */
export interface IContactForm extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  /**
   * Title displayed in the left column.
   */
  contactTitle?: string;

  /**
   * Description text displayed below the title in the left column.
   */
  contactDescription?: string;

  /**
   * Email address displayed as a link in the left column.
   */
  contactEmail?: string;

  /**
   * Href for the email link.
   */
  contactEmailHref?: string;

  /**
   * Book a call link configuration.
   */
  bookCallLink?: ICTA;

  /**
   * Form action URL for form submission.
   */
  formAction?: string;

  /**
   * Array of form fields to render. If not provided, defaults to standard fields.
   */
  fields?: IContactFormField[];

  /**
   * Submit button text.
   */
  submitButtonText?: string;
}
