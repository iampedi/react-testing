import { render, screen } from "@testing-library/react";
import { AuthContext } from "../context/AuthContext";
import { UserInfo } from "./UserInfo";

test("shows loading state", () => {
  render(
    <AuthContext.Provider value={{ user: null, loading: true, error: null }}>
      <UserInfo />
    </AuthContext.Provider>
  );
  expect(screen.getByText(/loading/i)).toBeInTheDocument();
});

test("shows error message", () => {
  render(
    <AuthContext.Provider value={{ user: null, loading: false, error: "Oops" }}>
      <UserInfo />
    </AuthContext.Provider>
  );
  expect(screen.getByRole("alert")).toHaveTextContent(/something went wrong/i);
});

test("shows no user when user is null", () => {
  render(
    <AuthContext.Provider value={{ user: null, loading: false, error: null }}>
      <UserInfo />
    </AuthContext.Provider>
  );
  expect(screen.getByText(/no user/i)).toBeInTheDocument();
});

test("shows welcome when user exists", () => {
  render(
    <AuthContext.Provider
      value={{ user: { name: "Pedram" }, loading: false, error: null }}
    >
      <UserInfo />
    </AuthContext.Provider>
  );
  expect(screen.getByText(/welcome, pedram/i)).toBeInTheDocument();
});
