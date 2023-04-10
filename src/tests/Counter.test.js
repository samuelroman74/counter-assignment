import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Counter from '../components/Counter';
// import necessary react testing library helpers here
// import the Counter component here

beforeEach(() => {
  render(<Counter />);
  // Render the Counter component here
})

test('renders counter message', () => {
    const welcomeMessage = screen.getByText(/Counter/i);
    expect(welcomeMessage).toBeInTheDocument();
  // Complete the unit test below based on the objective in the line above
});

test('should render initial count with value of 0', () => {
  expect(screen.getByTestId('count')).toHaveTextContent('0');
  // Complete the unit test below based on the objective in the line above
});

test('clicking + increments the count', () => {
  userEvent.click(screen.getByRole('button', { name: '+' }));
    expect(screen.getByTestId('count')).toHaveTextContent('1');
  // Complete the unit test below based on the objective in the line above
});

test('clicking - decrements the count', () => {
    userEvent.click(screen.getByRole('button', { name: '-' }));
    expect(screen.getByTestId('count')).toHaveTextContent('-1');
  // Complete the unit test below based on the objective in the line above
});
