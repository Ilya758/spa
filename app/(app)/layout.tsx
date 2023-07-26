'use client';

import React from 'react';
import { Header } from '@/stories/Header';
import { ThemeProvider } from 'styled-components';
import { DEFAULT_THEME } from '@/lib';
import { Footer } from '@/stories/Footer';
import { BaseLayoutProps } from '../shared/models';
import { StyledContainer, StyledMain } from './layoyt.styled';

const Layout = ({ children }: BaseLayoutProps) => (
  <ThemeProvider theme={DEFAULT_THEME}>
    <StyledContainer>
      <Header />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </StyledContainer>
  </ThemeProvider>
);

export default Layout;
