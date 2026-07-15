import { render, screen } from "@testing-library/react";
import { axe } from "vitest-axe";
import App from "./App";

describe("App", () => {
  it("renders the Start button on the root route", () => {
    render(<App />);
    expect(screen.getByRole("button", { name: /start/i })).toBeInTheDocument();
  });

  it("has no detectable accessibility violations", async () => {
    const { container } = render(<App />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
