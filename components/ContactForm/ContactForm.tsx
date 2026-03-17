"use client";

import { Container } from "@/components/Container/Container";
import { Button } from "@/components/Button/Button";
import { ArrowRightDownIcon } from "@/components/Icon";
import { Toast } from "@/components/Toast/Toast";
import type { TurnstileInstance } from "@marsidev/react-turnstile";
import { TurnstileWidget } from "@/components/TurnstileWidget";
import { cn } from "@/utils/classes";
import { useRef, useState } from "react";
import type { IContactForm, IContactFormField } from "./ContactForm.types";

const styles = {
  container: "max-w-[var(--breakpoint-2xl)]",
  wrapper: "flex flex-col-reverse max-lg:!px-0 lg:flex-row",
  leftColumn:
    "flex flex-col justify-between max-lg:mb-12 lg:w-1/2 px-14 py-14 border-x border-border-normal",
  title:
    "font-medium leading-[110%] text-size-32 lg:text-size-40 2xl:text-size-48 text-default-heading tracking-tight mb-6",
  description: "font-light text-default-base lg:text-lg mb-8",
  separator:
    "text-default-light uppercase font-mono text-size-12 lg:text-size-14",
  contactLinks: "space-y-4",
  contactLink:
    "flex items-center gap-2 text-default-heading hover:text-interactive-hover transition-colors",
  contactLinkText: "text-size-16 lg:text-size-18",
  rightColumn: "lg:w-1/2 px-14 py-14  border-r border-border-normal",
  form: "space-y-6",
  fieldGroup: "space-y-2",
  label: "text-default-heading text-size-14 lg:text-size-16 font-medium",
  input:
    "w-full bg-surface-input border-b border-border-strong px-5 py-4.5 text-default-base placeholder:text-default-light focus:outline-none focus:border-border-strong transition-colors",
  textarea:
    "w-full bg-surface-input border-b border-border-strong px-5 py-4.5 text-default-base placeholder:text-default-light focus:outline-none focus:border-border-strong transition-colors min-h-[120px] resize-y",
  submitButton: "mt-4",
};

const defaultFields: IContactFormField[] = [
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
];

export const ContactForm = ({
  className,
  contactTitle = "Talk to our team",
  contactDescription,
  contactEmail,
  contactEmailHref,
  bookCallLink,
  formAction = "/api/contact",
  fields = defaultFields,
  submitButtonText = "SEND MESSAGE",
  ...props
}: IContactForm) => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const turnstileRef = useRef<TurnstileInstance | null>(null);

  const turnstileEnabled = !!process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const canSubmit = !turnstileEnabled || turnstileToken;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current || isPending || !canSubmit) return;

    const formData = new FormData(formRef.current);
    const fullName = formData.get("fullName")?.toString() ?? "";
    const email = formData.get("email")?.toString() ?? "";
    const company = formData.get("company")?.toString() ?? "";
    const message = formData.get("message")?.toString() ?? "";

    if (!email || !message) return;

    setIsPending(true);
    try {
      const response = await fetch(formAction, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fullName,
          email,
          company: company || undefined,
          message,
          ...(turnstileToken && { cfTurnstileResponse: turnstileToken }),
        }),
      });

      const data = (await response.json().catch(() => ({}))) as {
        error?: string;
      };

      if (response.ok) {
        formRef.current.reset();
        setTurnstileToken(null);
        turnstileRef.current?.reset();
        setToastMessage("Thanks for reaching out! We'll get back to you soon.");
        setShowToast(true);
      } else {
        setToastMessage(
          data.error ?? "Something went wrong. Please try again.",
        );
        setShowToast(true);
      }
    } catch {
      setToastMessage("Something went wrong. Please try again.");
      setShowToast(true);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="border-t border-border-normal">
      <Container
        className={cn(styles.container, className)}
        {...props}
        noPadding
      >
        <Container className={styles.wrapper} displays={{ lg: "flex" }}>
          {/* Left Column - Contact Info */}
          <div className={styles.leftColumn}>
            <div>
              {contactTitle && <h2 className={styles.title}>{contactTitle}</h2>}
              {contactDescription && (
                <p className={styles.description}>{contactDescription}</p>
              )}
            </div>
            <div>
              {(contactEmail || bookCallLink) && (
                <div className={styles.contactLinks}>
                  <p className={styles.separator}>OR REACH US AT</p>
                  <div className={styles.contactLinks}>
                    {contactEmail && (
                      <a
                        className={styles.contactLink}
                        href={contactEmailHref || `mailto:${contactEmail}`}
                      >
                        <span className={styles.contactLinkText}>
                          {contactEmail}
                        </span>
                        <ArrowRightDownIcon className="size-4 text-default-heading" />
                      </a>
                    )}
                    {bookCallLink && (
                      <a
                        className={styles.contactLink}
                        href={bookCallLink.href}
                      >
                        <span className={styles.contactLinkText}>
                          {bookCallLink.children}
                        </span>
                        <ArrowRightDownIcon className="size-4 text-default-heading" />
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className={styles.rightColumn}>
            <form className={styles.form} onSubmit={handleSubmit} ref={formRef}>
              {fields.map((field) => (
                <div className={styles.fieldGroup} key={field.name}>
                  <label className={styles.label} htmlFor={field.name}>
                    {field.label}
                    {field.labelSuffix && ` ${field.labelSuffix}`}
                  </label>
                  {field.type === "textarea" ? (
                    <textarea
                      className={styles.textarea}
                      id={field.name}
                      name={field.name}
                      placeholder={field.placeholder}
                      required={field.required}
                    />
                  ) : (
                    <input
                      autoComplete={
                        field.name === "fullName" ||
                        field.name === "email" ||
                        field.name === "company"
                          ? "off"
                          : undefined
                      }
                      className={styles.input}
                      data-1p-ignore={
                        field.name === "fullName" ||
                        field.name === "email" ||
                        field.name === "company"
                          ? true
                          : undefined
                      }
                      data-lpignore={
                        field.name === "fullName" ||
                        field.name === "email" ||
                        field.name === "company"
                          ? "true"
                          : undefined
                      }
                      id={field.name}
                      name={field.name}
                      placeholder={field.placeholder}
                      required={field.required}
                      type={field.type || "text"}
                    />
                  )}
                </div>
              ))}

              {turnstileEnabled && (
                <div className="mt-4 w-full min-w-80 max-w-xl">
                  <TurnstileWidget
                    onExpire={() => setTurnstileToken(null)}
                    onSuccess={setTurnstileToken}
                    ref={turnstileRef}
                    size="flexible"
                  />
                </div>
              )}

              <Button
                className={styles.submitButton}
                disabled={isPending || !canSubmit}
                type="submit"
              >
                {isPending ? "SENDING..." : submitButtonText}
              </Button>
            </form>
          </div>

          {showToast && (
            <Toast
              message={toastMessage}
              onDismiss={() => setShowToast(false)}
            />
          )}
        </Container>
      </Container>
    </div>
  );
};
