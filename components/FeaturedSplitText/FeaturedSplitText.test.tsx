import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { axe } from "vitest-axe";
import { FeaturedSplitText } from "./FeaturedSplitText";
import { FEATURED_SPLIT_TEXT_EXAMPLE_PROPS } from "./FeaturedSplitText.examples";

const { default: defaultProps } = FEATURED_SPLIT_TEXT_EXAMPLE_PROPS;

describe("FeaturedSplitText", () => {
  it("renders the title as an h2", () => {
    render(<FeaturedSplitText {...defaultProps} />);

    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toHaveTextContent(defaultProps.title);
  });

  it("renders the description text", () => {
    render(<FeaturedSplitText {...defaultProps} />);

    expect(screen.getByText(defaultProps.description)).toBeInTheDocument();
  });

  it("merges a custom className onto the container", () => {
    const { container } = render(
      <FeaturedSplitText {...defaultProps} className="test-custom-class" />,
    );

    expect(container.firstElementChild!.className).toContain(
      "test-custom-class",
    );
  });

  it("forwards arbitrary HTML attributes to the container", () => {
    const { container } = render(
      <FeaturedSplitText {...defaultProps} id="split-text" />,
    );

    expect(container.firstElementChild!.id).toBe("split-text");
  });

  it("has no accessibility violations", async () => {
    const { container } = render(<FeaturedSplitText {...defaultProps} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
