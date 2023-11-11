import type { Preview } from '@storybook/react';
import '../src/css/globals.css';
import { Decorator } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from 'next-themes';
import { TooltipProvider } from '@radix-ui/react-tooltip';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};
const withTheme: Decorator = (StoryFn, context) => {
  const theme = context.globals.theme || 'system';
  return (
    <ThemeProvider attribute="class" defaultTheme={theme} forcedTheme={theme}>
      <TooltipProvider>
        <StoryFn />
      </TooltipProvider>
    </ThemeProvider>
  );
};
export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'system',
    toolbar: {
      icon: 'mirror',
      items: [
        { value: 'light', icon: 'circlehollow', title: 'light' },
        { value: 'dark', icon: 'circle', title: 'dark' },
        { value: 'system', icon: 'eye', title: 'system' },
      ],
      showName: true,
    },
  },
};
export const decorators = [withTheme];

export default preview;
