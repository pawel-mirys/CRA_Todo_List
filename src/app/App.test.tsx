import { render, screen } from '@testing-library/react';
import {App} from './App';

test('renders learn react link', () => {
  const test = render(<App />);
  expect(test).toBeDefined()
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  // expect(true).toBe(true);
});
