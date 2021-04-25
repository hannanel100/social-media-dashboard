import { render, screen } from '@testing-library/react';
import Header from './Header';

test('header contains title and followers count ', () => {
  render(<Header />)
  expect(screen.getByRole('heading')).toHaveTextContent('Social Media Dashboard')
  expect(screen.getByText('Total Followers:')).toBeDefined();
  expect(screen.getByRole('followers-count')).toBeTruthy();

});