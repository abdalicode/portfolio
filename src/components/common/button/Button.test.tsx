import { render, screen } from '@testing-library/react';

import { Button } from '.';

describe('Button component', () => {
  it('renders a button with default classes', () => {
    render(<Button />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass(
      'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
    );
  });

  it('renders a button with variant classes', () => {
    render(<Button variant="destructive" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass(
      'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90'
    );
  });

  it('renders a button with size classes', () => {
    render(<Button size="lg" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('h-10 rounded-md px-8');
  });

  it('applies custom className', () => {
    const customClass = 'custom-class';
    render(<Button className={customClass} />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass(customClass);
  });

  it('renders as a different element when asChild is true', () => {
    render(
      <Button asChild>
        <div data-testid="custom-element" />
      </Button>
    );
    const customElement = screen.getByTestId('custom-element');
    expect(customElement.tagName).not.toBe('BUTTON');
  });
});
