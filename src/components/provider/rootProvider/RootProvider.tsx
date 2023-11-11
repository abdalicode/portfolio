import React, { FC, ReactNode } from 'react';

import { TooltipProvider } from '@/components/common';

import { ThemeProvider } from '../themeProvider';

const RootProvider: FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <TooltipProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </TooltipProvider>
  );
};

export default RootProvider;
