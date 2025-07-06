import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LoginForm } from "./LoginForm";

test("shows error when submitting empty form", async () => {
  render(<LoginForm />);
  const loginButton = screen.getByRole("button", { name: /login/i });

  await userEvent.click(loginButton);

  expect(screen.getByRole("alert")).toHaveTextContent(
    /all fields are required/i
  );
});

test("does not show error when fields are filled", async () => {
  render(<LoginForm />);
  const emailInput = screen.getByLabelText(/email/i);
  const passwordInput = screen.getByLabelText(/password/i);
  const loginButton = screen.getByRole("button", { name: /login/i });

  await userEvent.type(emailInput, "pedram@example.com");
  await userEvent.type(passwordInput, "secret123");
  await userEvent.click(loginButton);

  expect(screen.queryByRole("alert")).not.toBeInTheDocument();
});
