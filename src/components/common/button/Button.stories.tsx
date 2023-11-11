import { SunIcon } from '@radix-ui/react-icons';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: 'Click me' },
};
export const Icon: Story = {
  args: { size: 'icon', children: <SunIcon /> },
};
