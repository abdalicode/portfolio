import React, { FC } from 'react';

import { Header } from '@/components/container';

import { MainLayoutProps } from './MainLayout.type';

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen m-auto flex flex-col">
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
