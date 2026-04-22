import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { axe } from "vitest-axe";
import { ContactForm } from "./ContactForm";
import { CONTACT_FORM_EXAMPLE_PROPS } from "./ContactForm.examples";

const { default: defaultProps } = CONTACT_FORM_EXAMPLE_PROPS;

function mockFetchOk() {
  return vi.spyOn(globalThis, "fetch").mockResolvedValue(
    new Response(JSON.stringify({}), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }),
  );
}

function mockFetchError(status = 500, error = "Server exploded") {
  return vi.spyOn(globalThis, "fetch").mockResolvedValue(
    new Response(JSON.stringify({ error }), {
      status,
      headers: { "Content-Type": "application/json" },
    }),
  );
}

beforeEach(() => {
  vi.restoreAllMocks();
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe("ContactForm", () => {
  describe("rendering", () => {
    it("renders the contact title and description", () => {
      render(<ContactForm {...defaultProps} />);

      expect(
        screen.getByRole("heading", { level: 2, name: defaultProps.contactTitle }),
      ).toBeInTheDocument();
      expect(
        screen.getByText(defaultProps.contactDescription!),
      ).toBeInTheDocument();
    });

    it("renders the contact email link with mailto href", () => {
      render(<ContactForm {...defaultProps} />);

      const emailLink = screen.getByRole("link", {
        name: new RegExp(defaultProps.contactEmail!, "i"),
      });
      expect(emailLink).toHaveAttribute("href", defaultProps.contactEmailHref);
    });

    it("renders the book-a-call link", () => {
      render(<ContactForm {...defaultProps} />);

      expect(
        screen.getByRole("link", {
          name: defaultProps.bookCallLink!.children as string,
        }),
      ).toBeInTheDocument();
    });

    it("renders every default field with a label and input", () => {
      render(<ContactForm {...defaultProps} />);

      for (const field of defaultProps.fields!) {
        const labelMatcher = field.labelSuffix
          ? new RegExp(`${field.label}.*${field.labelSuffix}`, "i")
          : field.label;
        const input = screen.getByLabelText(labelMatcher);
        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute("name", field.name);
      }
    });

    it("renders required fields with the required attribute", () => {
      render(<ContactForm {...defaultProps} />);

      const required = defaultProps.fields!.filter((f) => f.required);
      for (const field of required) {
        const input = screen.getByLabelText(
          field.labelSuffix
            ? new RegExp(`${field.label}.*${field.labelSuffix}`, "i")
            : field.label,
        );
        expect(input).toBeRequired();
      }
    });

    it("uses a <textarea> for fields typed as textarea", () => {
      render(<ContactForm {...defaultProps} />);

      const textarea = screen.getByLabelText(/how can we help/i);
      expect(textarea.tagName).toBe("TEXTAREA");
    });

    it("renders the configured submit button text", () => {
      render(<ContactForm {...defaultProps} submitButtonText="GO" />);

      expect(screen.getByRole("button", { name: "GO" })).toBeInTheDocument();
    });

    it("falls back to default fields when none are provided", () => {
      render(<ContactForm contactTitle="No fields" />);

      expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/how can we help/i)).toBeInTheDocument();
    });
  });

  describe("submission", () => {
    it("POSTs to formAction with form values when submitted", async () => {
      const fetchSpy = mockFetchOk();
      const user = userEvent.setup();

      render(<ContactForm {...defaultProps} />);

      await user.type(screen.getByLabelText(/full name/i), "Alex");
      await user.type(screen.getByLabelText(/email address/i), "a@b.co");
      await user.type(screen.getByLabelText(/how can we help/i), "Hello!");
      await user.click(screen.getByRole("button", { name: /send message/i }));

      await waitFor(() => expect(fetchSpy).toHaveBeenCalledOnce());

      const [url, init] = fetchSpy.mock.calls[0];
      expect(url).toBe(defaultProps.formAction);
      expect(init?.method).toBe("POST");
      const body = JSON.parse((init?.body as string) ?? "{}");
      expect(body).toMatchObject({
        name: "Alex",
        email: "a@b.co",
        message: "Hello!",
      });
    });

    it("shows a success toast after a 200 response", async () => {
      mockFetchOk();
      const user = userEvent.setup();

      render(<ContactForm {...defaultProps} />);

      await user.type(screen.getByLabelText(/full name/i), "Alex");
      await user.type(screen.getByLabelText(/email address/i), "a@b.co");
      await user.type(screen.getByLabelText(/how can we help/i), "Hi");
      await user.click(screen.getByRole("button", { name: /send message/i }));

      expect(
        await screen.findByText(/thanks for reaching out/i),
      ).toBeInTheDocument();
    });

    it("shows the server error message on a non-OK response", async () => {
      mockFetchError(400, "Captcha failed");
      const user = userEvent.setup();

      render(<ContactForm {...defaultProps} />);

      await user.type(screen.getByLabelText(/full name/i), "Alex");
      await user.type(screen.getByLabelText(/email address/i), "a@b.co");
      await user.type(screen.getByLabelText(/how can we help/i), "Hi");
      await user.click(screen.getByRole("button", { name: /send message/i }));

      expect(await screen.findByText(/captcha failed/i)).toBeInTheDocument();
    });

    it("shows a generic error message when fetch throws", async () => {
      vi.spyOn(globalThis, "fetch").mockRejectedValue(new Error("network"));
      const user = userEvent.setup();

      render(<ContactForm {...defaultProps} />);

      await user.type(screen.getByLabelText(/full name/i), "Alex");
      await user.type(screen.getByLabelText(/email address/i), "a@b.co");
      await user.type(screen.getByLabelText(/how can we help/i), "Hi");
      await user.click(screen.getByRole("button", { name: /send message/i }));

      expect(
        await screen.findByText(/something went wrong/i),
      ).toBeInTheDocument();
    });

    it("does not submit when required email or message are empty", async () => {
      const fetchSpy = mockFetchOk();
      const user = userEvent.setup();

      render(<ContactForm {...defaultProps} />);

      // Bypass HTML5 validation by clicking with empty inputs;
      // the component's handler also short-circuits when email/message are empty.
      const emailInput = screen.getByLabelText(/email address/i);
      const messageInput = screen.getByLabelText(/how can we help/i);
      emailInput.removeAttribute("required");
      messageInput.removeAttribute("required");

      await user.click(screen.getByRole("button", { name: /send message/i }));

      expect(fetchSpy).not.toHaveBeenCalled();
    });
  });

  it("has no accessibility violations", async () => {
    const { container } = render(<ContactForm {...defaultProps} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
