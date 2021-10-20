import { render, screen } from '@testing-library/react';
import App from './App';

test('Should render calendar app without error', () => {
  const { container } = render(<App />);
  expect(container.getElementsByClassName('calendar-content-container').length).toBe(1);
});

test('Should render edit event form without error', () => {
  const { container } = render(<App />);
  expect(container.querySelectorAll('#edit-event-form-container').length).toBe(1);
});

test('Should render edit event form with initalize state with add event button', () => {
  const { container } = render(<App />);
  expect(container.querySelectorAll('.add-event-btn').length).toBe(1);
})