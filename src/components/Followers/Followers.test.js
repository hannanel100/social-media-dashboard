import { queryAllByText, render, screen } from "@testing-library/react";
import Followers from "./Followers";

test('Should render followers by platform cards', () => {
    render(<Followers />);
    expect(screen.queryAllByText("Followers")).toBeInTheDocument()

});