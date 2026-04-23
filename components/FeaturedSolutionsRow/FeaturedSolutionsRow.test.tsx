import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { axe } from "vitest-axe";
import { FeaturedSolutionsRow } from "./FeaturedSolutionsRow";
import { FEATURED_SOLUTIONS_ROW_EXAMPLE_PROPS } from "./FeaturedSolutionsRow.examples";
import type { IFeaturedSolutionsRow } from "./FeaturedSolutionsRow.types";

const { default: defaultProps } = FEATURED_SOLUTIONS_ROW_EXAMPLE_PROPS;

describe("FeaturedSolutionsRow", () => {
  it("renders the section title (with inline HTML) and description", () => {
    render(<FeaturedSolutionsRow {...defaultProps} />);

    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading.textContent).toContain("Don't Just Survive on Drupal 7");
    expect(heading.textContent).toContain("Thrive on Drupal 7");

    expect(screen.getByText(defaultProps.description!)).toBeInTheDocument();
  });

  it("does not render a header when title, description, and eyebrow are all omitted", () => {
    const onlySolutions: IFeaturedSolutionsRow = {
      solutions: defaultProps.solutions,
    };
    render(<FeaturedSolutionsRow {...onlySolutions} />);

    expect(screen.queryByRole("heading", { level: 2 })).not.toBeInTheDocument();
  });

  it("renders one card per solution with title, description, and image", () => {
    render(<FeaturedSolutionsRow {...defaultProps} />);

    const articles = screen.getAllByRole("article");
    expect(articles).toHaveLength(defaultProps.solutions.length);

    defaultProps.solutions.forEach((solution, i) => {
      const article = articles[i];
      // ISolutionCard inherits title/description from HTMLAttributes
      // where both are optional, but the example fixture always sets them.
      expect(article).toHaveTextContent(solution.title!);
      expect(article).toHaveTextContent(solution.description!);

      const img = article.querySelector("img");
      expect(img).not.toBeNull();
      expect(img).toHaveAttribute("alt", solution.image.alt);
      expect(img).toHaveAttribute("src", solution.image.src);
    });
  });

  it("wraps the card in a Link when the solution has an href", () => {
    const propsWithHref: IFeaturedSolutionsRow = {
      ...defaultProps,
      solutions: defaultProps.solutions.map((solution, i) => ({
        ...solution,
        href: `/solution-${i}`,
      })),
    };
    render(<FeaturedSolutionsRow {...propsWithHref} />);

    propsWithHref.solutions.forEach((solution) => {
      const links = screen.getAllByRole("link");
      const matched = links.find(
        (link) => link.getAttribute("href") === solution.href,
      );
      expect(matched).toBeDefined();
    });
  });

  it("does not wrap the card in a Link when no href is provided", () => {
    render(<FeaturedSolutionsRow {...defaultProps} />);

    expect(screen.queryAllByRole("link")).toHaveLength(0);
  });

  it("merges a custom className onto the container", () => {
    const { container } = render(
      <FeaturedSolutionsRow {...defaultProps} className="test-custom-class" />,
    );

    expect(container.firstElementChild!.className).toContain(
      "test-custom-class",
    );
  });

  it("has no accessibility violations", async () => {
    const { container } = render(<FeaturedSolutionsRow {...defaultProps} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
