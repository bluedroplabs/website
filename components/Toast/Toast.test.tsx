import { render, screen, act } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { axe } from "vitest-axe";
import { Toast } from "@/components/Toast/Toast";

describe("Toast", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  it("renders the message", () => {
    render(<Toast message="Saved successfully" onDismiss={vi.fn()} />);
    expect(screen.getByText("Saved successfully")).toBeInTheDocument();
  });

  it("calls onDismiss after the default duration (4000ms)", () => {
    const onDismiss = vi.fn();
    render(<Toast message="Hello" onDismiss={onDismiss} />);
    expect(onDismiss).not.toHaveBeenCalled();
    act(() => vi.advanceTimersByTime(4000));
    expect(onDismiss).toHaveBeenCalledOnce();
  });

  it("calls onDismiss after a custom duration", () => {
    const onDismiss = vi.fn();
    render(<Toast duration={2000} message="Hello" onDismiss={onDismiss} />);
    act(() => vi.advanceTimersByTime(1999));
    expect(onDismiss).not.toHaveBeenCalled();
    act(() => vi.advanceTimersByTime(1));
    expect(onDismiss).toHaveBeenCalledOnce();
  });

  it("becomes visible shortly after render (opacity-100 class)", () => {
    const { container } = render(<Toast message="Hello" onDismiss={vi.fn()} />);
    // Initially not visible
    const toast = container.firstChild as HTMLElement;
    expect(toast).toHaveClass("opacity-0");
    // After the enter timer (10ms) fires
    act(() => vi.advanceTimersByTime(10));
    expect(toast).toHaveClass("opacity-100");
  });

  it("passes a11y checks when visible", async () => {
    const { container } = render(
      <main>
        <Toast message="Message sent!" onDismiss={vi.fn()} />
      </main>,
    );
    act(() => vi.advanceTimersByTime(10));
    // axe uses async microtasks internally — must switch to real timers
    vi.useRealTimers();
    expect(await axe(container)).toHaveNoViolations();
    vi.useFakeTimers();
  });
});
