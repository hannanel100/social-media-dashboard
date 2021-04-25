import { fireEvent, render, screen } from "@testing-library/react";
import Toggle from "./Toggle";

test("Toggle contains label and checkbox ", () => {
  const { getByTestId } = render(<Toggle />);
  expect(screen.getByLabelText("Dark Mode")).toBeDefined();
  const checkbox = getByTestId("toggle");
  expect(checkbox).toBeInTheDocument() 
 
});

test("Checkbox can be toggled", () => {
    const { getByTestId } = render(<Toggle />);
    const checkbox = getByTestId("toggle");
    expect(checkbox.checked).toEqual(false);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
})
