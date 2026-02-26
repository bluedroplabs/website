import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { axe } from "vitest-axe";
import { Button } from "@/components/Button/Button";

describe("Button", () => {
  describe("rendering", () => {
    it("renders a native <button> element by default", () => {
      render(<Button>Click me</Button>);
      expect(
        screen.getByRole("button", { name: "Click me" }),
      ).toBeInTheDocument();
    });

    it("renders as an <a> link when href is provided", () => {
      render(<Button href="/about">About</Button>);
      const link = screen.getByRole("link", { name: "About" });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", "/about");
    });

    it("adds rel='noopener noreferrer' for external links opened in a new tab", () => {
      render(
        <Button href="https://external.com" target="_blank">
          External
        </Button>,
      );
      expect(screen.getByRole("link")).toHaveAttribute(
        "rel",
        "noopener noreferrer",
      );
    });

    it("does not add rel for internal links opened in a new tab", () => {
      render(
        <Button href="/contact" target="_blank">
          Contact
        </Button>,
      );
      expect(screen.getByRole("link")).not.toHaveAttribute("rel");
    });

    it("does not add rel when rel is already explicitly set", () => {
      render(
        <Button href="https://external.com" rel="nofollow" target="_blank">
          External
        </Button>,
      );
      expect(screen.getByRole("link")).toHaveAttribute("rel", "nofollow");
    });

    it("renders children correctly", () => {
      render(
        <Button>
          <span>Icon</span> Label
        </Button>,
      );
      expect(screen.getByText("Label")).toBeInTheDocument();
      expect(screen.getByText("Icon")).toBeInTheDocument();
    });
  });

  describe("disabled state", () => {
    it("renders as disabled", () => {
      render(<Button disabled>Disabled</Button>);
      expect(screen.getByRole("button")).toBeDisabled();
    });

    it("does not fire onClick when disabled", async () => {
      const onClick = vi.fn();
      render(
        <Button disabled onClick={onClick}>
          Disabled
        </Button>,
      );
      await userEvent.click(screen.getByRole("button"));
      expect(onClick).not.toHaveBeenCalled();
    });
  });

  describe("variants", () => {
    it("applies font-light class for ghost variant", () => {
      render(<Button variant="ghost">Ghost</Button>);
      expect(screen.getByRole("button")).toHaveClass("font-light");
    });

    it("applies border class for outline variant", () => {
      render(<Button variant="outline">Outline</Button>);
      expect(screen.getByRole("button")).toHaveClass("border");
    });

    it("merges custom className onto the element", () => {
      render(<Button className="my-custom-class">Button</Button>);
      expect(screen.getByRole("button")).toHaveClass("my-custom-class");
    });
  });

  describe("keyboard interaction", () => {
    it("fires onClick when Enter is pressed while focused", async () => {
      const onClick = vi.fn();
      render(<Button onClick={onClick}>Press me</Button>);
      screen.getByRole("button").focus();
      await userEvent.keyboard("{Enter}");
      expect(onClick).toHaveBeenCalledOnce();
    });

    it("fires onClick when Space is pressed while focused", async () => {
      const onClick = vi.fn();
      render(<Button onClick={onClick}>Press me</Button>);
      screen.getByRole("button").focus();
      await userEvent.keyboard(" ");
      expect(onClick).toHaveBeenCalledOnce();
    });
  });

  describe("accessibility", () => {
    it("passes a11y checks as a default button", async () => {
      const { container } = render(
        <main>
          <Button>Submit</Button>
        </main>,
      );
      expect(await axe(container)).toHaveNoViolations();
    });

    it("passes a11y checks as a link", async () => {
      const { container } = render(
        <main>
          <Button href="/about">About us</Button>
        </main>,
      );
      expect(await axe(container)).toHaveNoViolations();
    });

    it("passes a11y checks when disabled", async () => {
      const { container } = render(
        <main>
          <Button disabled>Disabled</Button>
        </main>,
      );
      expect(await axe(container)).toHaveNoViolations();
    });

    it("is focusable via keyboard tab", async () => {
      render(<Button>Focusable</Button>);
      await userEvent.tab();
      expect(screen.getByRole("button")).toHaveFocus();
    });

    it("link variant is focusable via keyboard tab", async () => {
      render(<Button href="/page">Nav link</Button>);
      await userEvent.tab();
      expect(screen.getByRole("link")).toHaveFocus();
    });
  });
});
