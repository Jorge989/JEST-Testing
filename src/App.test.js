import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button has correct initial color", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  //find an element with a role of button and text of "Change to blue"
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
  // expect the background color to be red
  //click button
  fireEvent.click(colorButton);
  //expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
  //expect the button text to be "Change to red"
  expect(colorButton.textContent).toBe("Change to red");
});
test("initial conditions", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toBeEnabled();
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});
test("Checkbox disables button on first click and enables on second click", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const button = screen.getByRole("button", { name: "Change to blue" });
  fireEvent.click(checkbox);
  expect(button).toBeDisabled();
  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
});

test("Disabled button has gray background and reverts to red", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorButton = screen.getByRole("button", { name: "Change to blue " });
  //disable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle("background-color:gray");
  //re-enable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle("background-color:red");
});
test("Clicked disabled button has gray background and reverts to blue", () => {
  render(<App />);
  render(<App />);
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorButton = screen.getByRole("button", { name: "Change to blue " });
  //disable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle("background-color:gray");
  //re-enable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle("background-color:blue");
});
