import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { axe } from "vitest-axe";
import { FeaturedTextCta } from "./FeaturedTextCta";
import { FEATURED_TEXT_CTA_EXAMPLE_PROPS } from "./FeaturedTextCta.examples";

const {
  default: bodyProps,
  heading: headingProps,
  noCta: noCtaProps,
} = FEATURED_TEXT_CTA_EXAMPLE_PROPS;

describe("FeaturedTextCta", () => {
  it("renders body variant text inside a <p> tag", () => {
    const { container } = render(<FeaturedTextCta {...bodyProps} />);

    const paragraph = container.querySelector("p");
    expect(paragraph).not.toBeNull();
    expect(paragraph!.textContent).toContain(
      "Your Drupal 7 website has become a critical part of your business.",
    );
  });

  it("renders heading variant text inside an <h2> tag", () => {
    render(<FeaturedTextCta {...headingProps} />);

    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(heading.textContent).toContain(
      "Let us support you in running your CMS website.",
    );
  });

  it("renders inline HTML inside text (e.g. <strong>)", () => {
    const { container } = render(<FeaturedTextCta {...bodyProps} />);

    const strong = container.querySelector("strong");
    expect(strong).not.toBeNull();
    expect(strong!.textContent).toBe("Protect its future.");
  });

  it("renders the CTA button when cta is provided", () => {
    render(<FeaturedTextCta {...bodyProps} />);

    const cta = screen.getByRole("link", {
      name: bodyProps.cta!.children as string,
    });
    expect(cta).toBeInTheDocument();
    expect(cta).toHaveAttribute("href", bodyProps.cta!.href);
  });

  it("does not render a CTA button when cta is omitted", () => {
    render(<FeaturedTextCta {...noCtaProps} />);

    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });

  it("merges a custom className onto the container", () => {
    const { container } = render(
      <FeaturedTextCta {...bodyProps} className="test-custom-class" />,
    );

    expect(container.firstElementChild!.className).toContain(
      "test-custom-class",
    );
  });

  it("has no accessibility violations", async () => {
    const { container } = render(<FeaturedTextCta {...bodyProps} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
