import { render, screen, fireEvent } from "@testing-library/react";
import NameInput from "./NameInput";

test("updates text when user types in the input field", () => {
  render(<NameInput />);

  const input = screen.getByPlaceholderText("Enter name");

  // Before typing
  expect(screen.queryByTestId("displayName")).toBeNull();

  // Type "Venkat"
  fireEvent.change(input, { target: { value: "Venkat" } });

  // Expect the rendered output
  expect(screen.getByTestId("displayName")).toHaveTextContent("Hello, Venkat!");
});
