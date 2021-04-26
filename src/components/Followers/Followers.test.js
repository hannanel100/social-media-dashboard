import { getAllByText, queryAllByText, render, screen } from "@testing-library/react";
import Followers from "./Followers";

test('Should render followers by platform cards', () => {
    const {getByTestId} = render(<Followers />);
    const followers = getByTestId("followers");
    expect(followers).toBeInTheDocument(); 
    
    const cards = getAllByText(followers, "Followers");
    expect(cards).toHaveLength(4)

});