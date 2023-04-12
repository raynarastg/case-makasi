import { render, screen } from '@testing-library/react';
import { Home } from '../pages/Home';

describe('home page test', () => {
  let h1Home;
  let buttonSearch;
  test('renders h1 is on the screen', () => {
    render(<Home />);
    h1Home = screen.getByRole('heading', { level: 1 });
    expect(h1Home).toBeInTheDocument();
  });
  test('renders h1 contain text', () => {
    render(<Home />);
    expect(h1Home).toHaveTextContent(/^Search Devs$/i);
  });
  test('renders button is on the screen', () => {
    render(<Home />);
    buttonSearch = screen.getByRole('button');
    expect(buttonSearch).toBeInTheDocument();
  });
  test('if the search button is on the screen', () => {
    render(<Home />);
    expect(buttonSearch).toHaveTextContent(/^Buscar$/i);
  });
});
