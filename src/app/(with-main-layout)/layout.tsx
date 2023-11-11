import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/css/globals.css';
import { ReactNode } from 'react';

import { MainLayout } from '@/components/layout';
import { RootProvider } from '@/components/provider';

const inter = Inter({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'Hakan',
  description: '',
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RootProvider>
          <MainLayout> {children}</MainLayout>
        </RootProvider>
      </body>
    </html>
  );
}
