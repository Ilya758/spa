import { StyledComponentsRegistry } from '@/lib/registry';
import React from 'react';
import { BaseLayoutProps } from './shared/models';

export const metadata = {
  title: 'SPA',
  description: 'Next.js SPA',
};

const RootLayout = ({ children }: BaseLayoutProps) => (
  <html lang="en">
    <body>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </body>
  </html>
);

export default RootLayout;
