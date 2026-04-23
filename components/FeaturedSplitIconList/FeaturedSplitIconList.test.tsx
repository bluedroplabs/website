import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { axe } from "vitest-axe";
import { FeaturedSplitIconList } from "./FeaturedSplitIconList";
import { FEATURED_SPLIT_ICON_LIST_EXAMPLE_PROPS } from "./FeaturedSplitIconList.examples";
import type { IFeaturedSplitIconList } from "./FeaturedSplitIconList.types";

const { default: defaultProps } = FEATURED_SPLIT_ICON_LIST_EXAMPLE_PROPS;

describe("FeaturedSplitIconList", () => {
  it("renders the title as an h2", () => {
    render(<FeaturedSplitIconList {...defaultProps} />);

    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toHaveTextContent(defaultProps.title);
  });

  it("renders one list item per items entry", () => {
    render(<FeaturedSplitIconList {...defaultProps} />);

    const list = screen.getByRole("list");
    const items = list.querySelectorAll(":scope > li");
    expect(items).toHaveLength(defaultProps.items.length);
  });

  it("renders every item title and description", () => {
    render(<FeaturedSplitIconList {...defaultProps} />);

    for (const item of defaultProps.items) {
      expect(
        screen.getByRole("heading", { level: 3, name: item.title }),
      ).toBeInTheDocument();
      if (item.description) {
        expect(screen.getByText(item.description)).toBeInTheDocument();
      }
    }
  });

  it("returns null when items is empty", () => {
    const emptyProps: IFeaturedSplitIconList = {
      title: "Title",
      items: [],
    };
    const { container } = render(<FeaturedSplitIconList {...emptyProps} />);

    expect(container.firstChild).toBeNull();
  });

  it("merges a custom className onto the container", () => {
    const { container } = render(
      <FeaturedSplitIconList {...defaultProps} className="test-custom-class" />,
    );

    expect(container.firstElementChild!.className).toContain(
      "test-custom-class",
    );
  });

  it("has no accessibility violations", async () => {
    const { container } = render(<FeaturedSplitIconList {...defaultProps} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
