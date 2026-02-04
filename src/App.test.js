import { render, screen } from '@testing-library/react';
import App from './app/App';

test('renders app', () => {
  render(<App />);

  // ajusta pra algo que realmente exista na tela
  expect(
    screen.getByRole('img', { name: /porto\s+shop/i })
  ).toBeInTheDocument();
});
