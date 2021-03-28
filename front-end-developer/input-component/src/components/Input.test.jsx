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

test("Display helper text", () => {
  const text = "Some interesting Text";
  render(<Input helperText={text} />);
  const input = screen.getByRole("textbox");
  const label = screen.getByTestId("label");
  const helperText = screen.getByText(text);
  expect(label).toBeDefined();
  expect(input.placeholder).not.toBe("");
  expect(helperText).toBeDefined();
});

test("Display start Icon", () => {
  render(<Input startIcon="face" />);
  const input = screen.getByRole("textbox");
  const label = screen.getByTestId("label");
  const icon = screen.getByText("face");
  expect(label).toBeDefined();
  expect(input.placeholder).not.toBe("");
  expect(icon).toBeDefined();
});

test("Display end Icon", () => {
  render(<Input endIcon="face" />);
  const input = screen.getByRole("textbox");
  const label = screen.getByTestId("label");
  const icon = screen.getByText("face");
  expect(label).toBeDefined();
  expect(input.placeholder).not.toBe("");
  expect(icon).toBeDefined();
});

test("Display value text", () => {
  render(<Input value="Text" />);
  const input = screen.getByDisplayValue("Text");
  const label = screen.getByTestId("label");
  expect(label).toBeDefined();
  expect(input).toBeDefined();
});
