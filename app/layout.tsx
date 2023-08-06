import { StyledComponentsRegistry } from '@/lib/registry';
import React from 'react';
import { BaseLayoutProps } from './shared/models';

export const metadata = {
  title: 'SPA',
  description: 'Next.js SPA',
};

const RootLayout = ({ children }: BaseLayoutProps) => (
  <html>
    <body>
      <StyledComponentsRegistry>
        {children}
        <div id="modal-root" />
      </StyledComponentsRegistry>
    </body>
  </html>
);

export default RootLayout;
