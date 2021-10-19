import { render, screen } from '@testing-library/react';
import App from './App';

test('render both route button correctly', () => {
  const { container } = render(<App />);
  expect(container.getElementsByClassName('route-button').length).toBe(2);
});
