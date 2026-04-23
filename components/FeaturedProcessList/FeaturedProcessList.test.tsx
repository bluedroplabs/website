import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { axe } from "vitest-axe";
import { FeaturedProcessList } from "./FeaturedProcessList";
import { FEATURED_PROCESS_LIST_EXAMPLE_PROPS } from "./FeaturedProcessList.examples";
import type { IFeaturedProcessList } from "./FeaturedProcessList.types";

const { default: defaultProps } = FEATURED_PROCESS_LIST_EXAMPLE_PROPS;

describe("FeaturedProcessList", () => {
  it("renders the section title and description when provided", () => {
    render(<FeaturedProcessList {...defaultProps} />);

    expect(
      screen.getByRole("heading", { level: 2, name: defaultProps.title }),
    ).toBeInTheDocument();
    expect(screen.getByText(defaultProps.description!)).toBeInTheDocument();
  });

  it("does not render a header when title and description are both omitted", () => {
    const onlyItems: IFeaturedProcessList = { items: defaultProps.items };
    render(<FeaturedProcessList {...onlyItems} />);

    expect(screen.queryByRole("heading", { level: 2 })).not.toBeInTheDocument();
  });

  it("renders an ordered list with one entry per item", () => {
    render(<FeaturedProcessList {...defaultProps} />);

    const list = screen.getByRole("list");
    expect(list.tagName).toBe("OL");

    const items = within(list).getAllByRole("listitem");
    expect(items).toHaveLength(defaultProps.items.length);
  });

  it("renders each item's title (as h3) and description in order", () => {
    render(<FeaturedProcessList {...defaultProps} />);

    const list = screen.getByRole("list");
    const items = within(list).getAllByRole("listitem");

    defaultProps.items.forEach((item, i) => {
      const li = items[i];
      const heading = within(li).getByRole("heading", { level: 3 });
      expect(heading).toHaveTextContent(item.title);
      expect(li).toHaveTextContent(item.description);
    });
  });

  it("auto-numbers each step with a 1-based bracketed index", () => {
    render(<FeaturedProcessList {...defaultProps} />);

    const list = screen.getByRole("list");
    const items = within(list).getAllByRole("listitem");

    items.forEach((li, i) => {
      expect(li).toHaveTextContent(`[${i + 1}]`);
    });
  });

  it("merges a custom className onto the container", () => {
    const { container } = render(
      <FeaturedProcessList {...defaultProps} className="test-custom-class" />,
    );

    expect(container.firstElementChild!.className).toContain(
      "test-custom-class",
    );
  });

  it("has no accessibility violations", async () => {
    const { container } = render(<FeaturedProcessList {...defaultProps} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
