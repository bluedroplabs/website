import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { axe } from "vitest-axe";
import { Navigation } from "./Navigation";
import { NAVIGATION_EXAMPLE_PROPS } from "./Navigation.examples";

const { default: defaultProps } = NAVIGATION_EXAMPLE_PROPS;

describe("Navigation", () => {
  it("renders inside a banner landmark", () => {
    render(<Navigation {...defaultProps} />);
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  it("renders the home link with the brand logo and aria-label", () => {
    render(<Navigation {...defaultProps} />);

    const home = screen.getByRole("link", { name: /blue drop labs - home/i });
    expect(home).toHaveAttribute("href", "/");

    const logo = within(home).getByAltText(defaultProps.logo.alt);
    expect(logo).toBeInTheDocument();
  });

  it("renders every desktop nav link with the configured href", () => {
    render(<Navigation {...defaultProps} />);

    const nav = screen.getByRole("navigation");
    for (const link of defaultProps.links) {
      const item = within(nav).getByRole("link", {
        name: link.children as string,
      });
      expect(item).toHaveAttribute("href", link.href!);
    }
  });

  it("renders the CTA as a link with its href", () => {
    render(<Navigation {...defaultProps} />);

    const cta = screen.getByRole("link", {
      name: defaultProps.cta.children as string,
    });
    expect(cta).toHaveAttribute("href", defaultProps.cta.href!);
  });

  it("toggles the mobile menu button label between Open and Close", async () => {
    render(<Navigation {...defaultProps} />);
    const user = userEvent.setup();

    const toggle = screen.getByRole("button", { name: /open menu/i });
    expect(toggle).toBeInTheDocument();

    await user.click(toggle);
    expect(
      screen.getByRole("button", { name: /close menu/i }),
    ).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /close menu/i }));
    expect(
      screen.getByRole("button", { name: /open menu/i }),
    ).toBeInTheDocument();
  });

  it("opens the mobile menu dialog when the toggle is clicked", async () => {
    const { container } = render(<Navigation {...defaultProps} />);
    const user = userEvent.setup();

    // The closed mobile menu has both `inert` and `aria-hidden="true"`,
    // which excludes it from the accessibility tree even with
    // `{ hidden: true }`. Fall back to querySelector for direct DOM access.
    const dialog = container.querySelector('[role="dialog"]')!;
    expect(dialog).toHaveAttribute("aria-hidden", "true");

    await user.click(screen.getByRole("button", { name: /open menu/i }));

    expect(dialog).toHaveAttribute("aria-hidden", "false");
  });

  it("renders mobile menu entries for each link", () => {
    const { container } = render(<Navigation {...defaultProps} />);

    const dialog = container.querySelector('[role="dialog"]') as HTMLElement;
    expect(dialog).not.toBeNull();
    for (const link of defaultProps.links) {
      const matches = within(dialog).getAllByText(link.children as string);
      expect(matches.length).toBeGreaterThan(0);
    }
  });

  it("merges custom className onto the header", () => {
    render(<Navigation {...defaultProps} className="my-custom-nav" />);
    expect(screen.getByRole("banner")).toHaveClass("my-custom-nav");
  });

  it("has no accessibility violations", async () => {
    const { container } = render(<Navigation {...defaultProps} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
