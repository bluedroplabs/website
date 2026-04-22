import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { axe } from "vitest-axe";
import { FeaturedServiceCategories } from "./FeaturedServiceCategories";
import { FEATURED_SERVICE_CATEGORIES_EXAMPLE_PROPS } from "./FeaturedServiceCategories.examples";
import type { IFeaturedServiceCategories } from "./FeaturedServiceCategories.types";

const { default: defaultProps } = FEATURED_SERVICE_CATEGORIES_EXAMPLE_PROPS;

const minimalProps: IFeaturedServiceCategories = {
  title: "Section Title",
  groups: [
    {
      title: "Group A",
      description: "Group A description",
      items: [
        {
          icon: "RocketIcon",
          title: "Item A1",
          features: ["A1 feature 1", "A1 feature 2"],
        },
        {
          icon: "AnalyticsIcon",
          title: "Item A2",
          features: ["A2 feature 1"],
        },
      ],
    },
  ],
};

describe("FeaturedServiceCategories", () => {
  it("renders the section header (eyebrow, title, description)", () => {
    render(<FeaturedServiceCategories {...defaultProps} />);

    expect(screen.getByText(defaultProps.eyebrow!)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.description!)).toBeInTheDocument();
  });

  it("omits the eyebrow and description when not provided", () => {
    render(<FeaturedServiceCategories {...minimalProps} />);

    expect(screen.getByText(minimalProps.title)).toBeInTheDocument();
    expect(
      screen.queryByText(defaultProps.eyebrow!),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText(defaultProps.description!),
    ).not.toBeInTheDocument();
  });

  it("renders every group's title and description", () => {
    render(<FeaturedServiceCategories {...defaultProps} />);

    for (const group of defaultProps.groups) {
      expect(screen.getByText(group.title)).toBeInTheDocument();
      expect(screen.getByText(group.description)).toBeInTheDocument();
    }
  });

  it("renders every item title across all groups", () => {
    render(<FeaturedServiceCategories {...defaultProps} />);

    const expectedItemTitles = defaultProps.groups.flatMap((g) =>
      g.items.map((i) => i.title),
    );

    for (const itemTitle of expectedItemTitles) {
      expect(
        screen.getByRole("heading", { level: 3, name: itemTitle }),
      ).toBeInTheDocument();
    }
  });

  it("renders every feature as a list item under its parent card", () => {
    render(<FeaturedServiceCategories {...minimalProps} />);

    for (const item of minimalProps.groups[0].items) {
      const heading = screen.getByRole("heading", {
        level: 3,
        name: item.title,
      });
      const card = heading.parentElement!;
      const list = within(card).getByRole("list");
      const listItems = within(list).getAllByRole("listitem");

      expect(listItems).toHaveLength(item.features.length);
      item.features.forEach((feature, i) => {
        expect(listItems[i]).toHaveTextContent(feature);
      });
    }
  });

  it("uses the 4-column grid class when a group has 4 items", () => {
    const { container } = render(
      <FeaturedServiceCategories {...defaultProps} />,
    );

    const fourItemGroup = defaultProps.groups.find((g) => g.items.length === 4);
    expect(fourItemGroup).toBeDefined();

    const fourColGrid = container.querySelector(".lg\\:grid-cols-4");
    expect(fourColGrid).not.toBeNull();
  });

  it("uses the 3-column grid class when a group has 3 items", () => {
    const { container } = render(
      <FeaturedServiceCategories {...defaultProps} />,
    );

    const threeItemGroup = defaultProps.groups.find(
      (g) => g.items.length === 3,
    );
    expect(threeItemGroup).toBeDefined();

    const threeColGrid = container.querySelector(".lg\\:grid-cols-3");
    expect(threeColGrid).not.toBeNull();
  });

  it("uses the 2-column grid class when a group has 2 items", () => {
    const { container } = render(
      <FeaturedServiceCategories {...minimalProps} />,
    );

    const twoColGrid = container.querySelector(".md\\:grid-cols-2");
    expect(twoColGrid).not.toBeNull();
  });

  it("does not crash when an item references an unknown icon", () => {
    const propsWithUnknownIcon: IFeaturedServiceCategories = {
      title: "Title",
      groups: [
        {
          title: "Group",
          description: "Description",
          items: [
            {
              icon: "DefinitelyNotARegisteredIcon",
              title: "Item",
              features: ["Only feature"],
            },
          ],
        },
      ],
    };

    expect(() =>
      render(<FeaturedServiceCategories {...propsWithUnknownIcon} />),
    ).not.toThrow();

    expect(
      screen.getByRole("heading", { level: 3, name: "Item" }),
    ).toBeInTheDocument();
  });

  it("merges a custom className onto the container", () => {
    const { container } = render(
      <FeaturedServiceCategories
        {...minimalProps}
        className="test-custom-class"
      />,
    );

    const root = container.firstElementChild;
    expect(root).not.toBeNull();
    expect(root!.className).toContain("test-custom-class");
  });

  it("has no accessibility violations", async () => {
    const { container } = render(
      <FeaturedServiceCategories {...defaultProps} />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
