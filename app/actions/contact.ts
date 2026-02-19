"use server";

export type ContactFormState = {
  success: boolean;
  message: string;
} | null;

export async function submitContactForm(
  _prevState: ContactFormState,
  _formData: FormData,
): Promise<ContactFormState> {
  // TODO: integrate with actual API
  return {
    success: true,
    message: "Thank you! We'll be in touch soon.",
  };
}
