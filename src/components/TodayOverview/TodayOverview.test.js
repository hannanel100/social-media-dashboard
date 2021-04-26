import { getAllByTitle, queryByAttribute, render, screen } from '@testing-library/react';
import TodayOverview from './TodayOverview';

test('TodayOverview contains header, cards', () => {
    const {getByTestId} = render(<TodayOverview />)
    const overview = getByTestId("overview");
    expect(overview).toBeInTheDocument(); 
  expect(screen.getByRole('heading')).toHaveTextContent('Overview - Today')

  const cards = overview.childNodes;
  expect(cards.length).toBeGreaterThan(1)
});

test('TodayOverview cards contain data' , ()=>{
     render( <TodayOverview/>)
const icons = screen.queryAllByTitle("icon")
expect(icons.length).toBeGreaterThan(1)
});