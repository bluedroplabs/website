import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { axe } from "vitest-axe";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./Accordion";

const items = (
  <>
    <AccordionItem value="item-1">
      <AccordionTrigger>Question one</AccordionTrigger>
      <AccordionContent>Answer one</AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Question two</AccordionTrigger>
      <AccordionContent>Answer two</AccordionContent>
    </AccordionItem>
  </>
);

function renderAccordion({
  defaultValue,
  type = "single",
}: {
  defaultValue?: string;
  type?: "single" | "multiple";
} = {}) {
  if (type === "multiple") {
    return render(
      <Accordion
        defaultValue={defaultValue ? [defaultValue] : []}
        type="multiple"
      >
        {items}
      </Accordion>,
    );
  }
  return render(
    <Accordion collapsible defaultValue={defaultValue} type="single">
      {items}
    </Accordion>,
  );
}

describe("Accordion", () => {
  it("renders all triggers as collapsed buttons by default", () => {
    renderAccordion();

    const triggers = screen.getAllByRole("button");
    expect(triggers).toHaveLength(2);
    triggers.forEach((trigger) => {
      expect(trigger).toHaveAttribute("aria-expanded", "false");
    });
  });

  it("expands the targeted item on click", async () => {
    renderAccordion();
    const user = userEvent.setup();

    const trigger = screen.getByRole("button", { name: /question one/i });
    await user.click(trigger);

    expect(trigger).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText("Answer one")).toBeVisible();
  });

  it("collapses an open item when its trigger is clicked again (single + collapsible)", async () => {
    renderAccordion();
    const user = userEvent.setup();

    const trigger = screen.getByRole("button", { name: /question one/i });
    await user.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "true");

    await user.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "false");
  });

  it("collapses the previously open item when another trigger is clicked (single mode)", async () => {
    renderAccordion();
    const user = userEvent.setup();

    const first = screen.getByRole("button", { name: /question one/i });
    const second = screen.getByRole("button", { name: /question two/i });

    await user.click(first);
    expect(first).toHaveAttribute("aria-expanded", "true");

    await user.click(second);
    expect(first).toHaveAttribute("aria-expanded", "false");
    expect(second).toHaveAttribute("aria-expanded", "true");
  });

  it("supports multiple items being open simultaneously in multiple mode", async () => {
    renderAccordion({ type: "multiple" });
    const user = userEvent.setup();

    const first = screen.getByRole("button", { name: /question one/i });
    const second = screen.getByRole("button", { name: /question two/i });

    await user.click(first);
    await user.click(second);

    expect(first).toHaveAttribute("aria-expanded", "true");
    expect(second).toHaveAttribute("aria-expanded", "true");
  });

  it("opens the item passed via defaultValue on first render", () => {
    renderAccordion({ defaultValue: "item-2" });

    const second = screen.getByRole("button", { name: /question two/i });
    expect(second).toHaveAttribute("aria-expanded", "true");
  });

  it("merges custom className onto the trigger element", () => {
    render(
      <Accordion collapsible type="single">
        <AccordionItem value="item-1">
          <AccordionTrigger className="my-custom-trigger">
            Question
          </AccordionTrigger>
          <AccordionContent>Answer</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );

    expect(screen.getByRole("button")).toHaveClass("my-custom-trigger");
  });

  it("has no accessibility violations when collapsed", async () => {
    const { container } = renderAccordion();
    expect(await axe(container)).toHaveNoViolations();
  });

  it("has no accessibility violations when expanded", async () => {
    const { container } = renderAccordion({ defaultValue: "item-1" });
    expect(await axe(container)).toHaveNoViolations();
  });
});
