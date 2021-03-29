import { render, screen } from "@testing-library/react";
import App from "./App";

test("Display Header component", () => {
  render(<App />);
  const headerComponent = screen.getByTestId("header-component");
  expect(headerComponent).toBeInTheDocument();
});
