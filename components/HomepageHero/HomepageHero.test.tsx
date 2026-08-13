import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { HomepageHero } from "./HomepageHero";

describe("HomepageHero", () => {
  it("renders Canvas rich text without exposing paragraph markup", () => {
    render(
      <HomepageHero
        cta={{ children: "Start Your Project", href: "/contact" }}
        description="<p>High-performance <em>hosting</em>.</p>"
        title="<p>Your <strong>Website</strong> Deserves Better canvas</p>"
      />,
    );

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Your Website Deserves Better canvas");
    expect(heading.querySelector("p")).toBeNull();
    expect(heading.querySelector("strong")).toHaveTextContent("Website");
    expect(screen.getByText("hosting").tagName).toBe("EM");
    expect(screen.queryByText(/<p>/)).not.toBeInTheDocument();
  });
});
