import { render, screen } from "@testing-library/react";
import App from "./App";

test("Display Header component", () => {
  render(<App />);
  const headerComponent = screen.getByRole("banner");
  const logo = screen.getByTestId("logo");
  expect(headerComponent).toBeInTheDocument();
  expect(logo).toBeInTheDocument();
});
