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
// teste("button has correct initial text", () => {});
