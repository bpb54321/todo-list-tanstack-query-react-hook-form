import { render, screen } from '@testing-library/react';
import { App } from './App';

describe('App', () => {
  it('renders a hello world heading', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', { name: /hello, world!/i })
    ).toBeInTheDocument();
  });
});
