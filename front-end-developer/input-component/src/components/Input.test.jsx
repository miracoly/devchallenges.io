import Input from "./Input";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

test("Displays plain Input with label and placeholder", () => {
  render(<Input />);
  const input = screen.getByRole("textbox");
  const label = screen.getByTestId("label");
  expect(label).toBeDefined();
  expect(input.placeholder).not.toBe("");
});

test("Display disabled Input", () => {
  render(<Input disabled />);
  const input = screen.getByRole("textbox");
  const label = screen.getByTestId("label");
  expect(label).toBeDefined();
  expect(input.placeholder).not.toBe("");
  expect(input).toBeDisabled();
});
