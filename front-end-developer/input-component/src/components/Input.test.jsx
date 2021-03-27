import Input from "./Input";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

test("Displays plain Input with default placeholder", () => {
  render(<Input />);
  const input = screen.getByRole("textbox");
  expect(input.placeholder).toBe("placeholder");
});
