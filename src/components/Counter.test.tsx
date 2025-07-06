import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Counter } from "./Counter";

test("increments counter and reset", async () => {
  render(<Counter />);
  const incrementButton = screen.getByRole("button", { name: /increment/i });
  const resetButton = screen.getByRole("button", { name: /reset/i });

  await userEvent.click(incrementButton);
  expect(screen.getByText(/current count: 1/i)).toBeInTheDocument();

  await userEvent.click(resetButton);
  expect(screen.getByText(/current count: 0/i)).toBeInTheDocument();
});
