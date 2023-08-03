'use client';

import React from 'react';
import { Header } from '@/stories/Header';
import { ThemeProvider } from 'styled-components';
import { DEFAULT_THEME } from '@/lib';
import { Footer } from '@/stories/Footer';
import { BaseLayoutProps } from '../shared/models';
import { StyledContainer, StyledMain } from './layoyt.styled';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const Layout = ({ children }: BaseLayoutProps) => (
  <ThemeProvider theme={DEFAULT_THEME}>
    <StyledContainer>
      <PayPalScriptProvider
        options={{ clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID }}
      >
        <Header />
        <StyledMain>{children}</StyledMain>
        <Footer />
      </PayPalScriptProvider>
    </StyledContainer>
  </ThemeProvider>
);

export default Layout;
