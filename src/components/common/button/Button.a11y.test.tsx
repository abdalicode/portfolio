import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import React from 'react';

import { Button } from '.';

describe('Button Accessibility Tests', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(<Button>Click me</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('should be focusable', async () => {
    const mockHandleClick = jest.fn();
    render(<Button onClick={mockHandleClick}>Click me</Button>);
    const button = screen.getByRole('button', { name: 'Click me' });
    await userEvent.tab();
    expect(button).toHaveFocus();
    await userEvent.click(button);
    expect(mockHandleClick).toHaveBeenCalled();
  });
  it("should not be focusable when it's disabled", async () => {
    render(<Button disabled>Click me</Button>);
    const button = screen.getByRole('button', { name: 'Click me' });
    await userEvent.tab();
    expect(button).not.toHaveFocus();
  });
  it('should responds to mouse click, Enter, and Space keypress', async () => {
    const mockHandleClick = jest.fn();
    render(<Button onClick={mockHandleClick}>Click me</Button>);
    const button = screen.getByRole('button', { name: 'Click me' });

    await userEvent.click(button);
    expect(mockHandleClick).toHaveBeenCalledTimes(1);

    await userEvent.type(button, '{enter}', { skipClick: true });
    expect(mockHandleClick).toHaveBeenCalledTimes(2);

    //todo: add an assertion for space key
  });
  it("should not responds to mouse click, Enter, and Space keypress when it's disabled", async () => {
    const mockHandleClick = jest.fn();
    render(
      <Button onClick={mockHandleClick} disabled>
        Click me
      </Button>
    );
    const button = screen.getByRole('button', { name: 'Click me' });
    await userEvent.click(button);
    await userEvent.type(button, '{enter}', { skipClick: true });

    //todo: add an assertion for space key

    expect(mockHandleClick).not.toHaveBeenCalled();
  });
});
