import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { axe } from "vitest-axe";
import { FeaturedCtaBand } from "./FeaturedCtaBand";
import { FEATURED_CTA_BAND_EXAMPLE_PROPS } from "./FeaturedCtaBand.examples";

const {
  default: stackedProps,
  inline: inlineProps,
  centered: centeredProps,
} = FEATURED_CTA_BAND_EXAMPLE_PROPS;

describe("FeaturedCtaBand", () => {
  describe("stacked variant (default)", () => {
    it("renders the title, description, and CTA", () => {
      render(<FeaturedCtaBand {...stackedProps} />);

      expect(
        screen.getByRole("heading", { level: 2, name: stackedProps.title }),
      ).toBeInTheDocument();
      expect(screen.getByText(stackedProps.description!)).toBeInTheDocument();

      const cta = screen.getByRole("link", {
        name: stackedProps.cta!.children as string,
      });
      expect(cta).toHaveAttribute("href", stackedProps.cta!.href);
    });

    it("uses the stacked layout when no variant is provided", () => {
      const { container } = render(
        <FeaturedCtaBand
          cta={stackedProps.cta}
          description={stackedProps.description}
          title={stackedProps.title}
        />,
      );

      // Stacked uses lg:gap-30 spacing; inline uses lg:gap-10 with a
      // gradient background. tailwind-merge collapses bg-dotted into the
      // last bg-* class, so we assert on stable layout markers instead.
      expect(container.querySelector(".lg\\:gap-30")).not.toBeNull();
      expect(container.querySelector(".bg-gradient-to-r")).toBeNull();
    });
  });

  describe("inline variant", () => {
    it("renders the title, description, and CTA", () => {
      render(<FeaturedCtaBand {...inlineProps} />);

      expect(
        screen.getByRole("heading", { level: 2, name: inlineProps.title }),
      ).toBeInTheDocument();
      expect(screen.getByText(inlineProps.description!)).toBeInTheDocument();
      expect(
        screen.getByRole("link", {
          name: inlineProps.cta!.children as string,
        }),
      ).toBeInTheDocument();
    });
  });

  describe("centered variant", () => {
    it("renders the centered text with parsed inline HTML", () => {
      const { container } = render(<FeaturedCtaBand {...centeredProps} />);

      const paragraph = container.querySelector("p");
      expect(paragraph).not.toBeNull();
      expect(paragraph!.textContent).toContain("Everything you need to grow");

      const strongs = container.querySelectorAll("strong");
      expect(strongs.length).toBeGreaterThanOrEqual(3);
      const strongText = Array.from(strongs).map((el) => el.textContent);
      expect(strongText).toEqual(
        expect.arrayContaining(["visibility", "performance", "conversions"]),
      );
    });

    it("does not render a title, description, or CTA", () => {
      render(<FeaturedCtaBand {...centeredProps} />);

      expect(
        screen.queryByRole("heading", { level: 2 }),
      ).not.toBeInTheDocument();
      expect(screen.queryByRole("link")).not.toBeInTheDocument();
    });
  });

  it("does not render a CTA when cta is omitted on stacked/inline", () => {
    render(
      <FeaturedCtaBand
        description="Description"
        title="Title"
        variant="stacked"
      />,
    );

    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });

  it("merges a custom className onto the container", () => {
    const { container } = render(
      <FeaturedCtaBand {...stackedProps} className="test-custom-class" />,
    );

    expect(container.firstElementChild!.className).toContain(
      "test-custom-class",
    );
  });

  it("has no accessibility violations (stacked)", async () => {
    const { container } = render(<FeaturedCtaBand {...stackedProps} />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it("has no accessibility violations (centered)", async () => {
    const { container } = render(<FeaturedCtaBand {...centeredProps} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
