import { render, screen } from "@testing-library/react";
import LoginPage from "../pages/Login";
import "@testing-library/jest-dom";



test("renders the login form", () => {
  render(<LoginPage />);
  expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
});
