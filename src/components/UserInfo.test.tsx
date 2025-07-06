import { render, screen } from "@testing-library/react";
import { AuthContext } from "../context/AuthContext";
import { UserInfo } from "./UserInfo";

test("renders welcome message with user name", () => {
  const mockUser = { name: "Pedram" };

  render(
    <AuthContext.Provider value={{ user: mockUser }}>
      <UserInfo />
    </AuthContext.Provider>
  );

  expect(screen.getByText(/welcome, pedram/i)).toBeInTheDocument();
});

test("renders 'No user' when user is null", () => {
  render(
    <AuthContext.Provider value={{ user: null }}>
      <UserInfo />
    </AuthContext.Provider>
  );

  expect(screen.getByText(/no user/i)).toBeInTheDocument();
});
