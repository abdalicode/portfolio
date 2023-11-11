import { render } from '@testing-library/react';
import React from 'react';

import { Button } from '.';

describe('Button Snapshot Tests', () => {
  const variants = [
    'default',
    'destructive',
    'outline',
    'secondary',
    'ghost',
    'link',
  ] as const;
  const sizes = ['default', 'sm', 'lg', 'icon'] as const;

  variants.forEach((variant) => {
    sizes.forEach((size) => {
      it(`renders correctly with variant: ${variant} and size: ${size}`, () => {
        const { asFragment } = render(<Button variant={variant} size={size} />);
        expect(asFragment()).toMatchSnapshot();
      });
    });
  });

  it('renders correctly as a child component', () => {
    const { asFragment } = render(
      <Button asChild>
        <span>Child Content</span>
      </Button>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
