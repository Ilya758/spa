'use client';

import React, { useEffect, useState } from 'react';
import { Header } from '@/stories/Header';
import { ThemeProvider } from 'styled-components';
import { DEFAULT_THEME } from '@/lib';
import { Footer } from '@/stories/Footer';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { BaseLayoutProps } from '@/app/shared/models';
import { StyledContainer, StyledMain } from './layoyt.styled';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { LocalStorageService } from '@/app/shared/services';
import Loading from './loading';

const Layout = ({
  children,
  params: { lang },
}: BaseLayoutProps & {
  params: {
    lang: 'ru-RU' | 'en-US';
  };
}) => {
  const [loading, setIsLoading] = useState(true);
  const [messages, setMessages] = useState<Record<string, string>>({});

  useEffect(() => {
    (async () => {
      try {
        if (lang !== 'en-US' && lang !== 'ru-RU') {
          notFound();
        }

        const result = (await import(`../../dictionaries/${lang}.json`))
          .default;
        LocalStorageService.setItem('lang', lang);

        setMessages(result);
      } catch (error) {
        notFound();
      } finally {
        setIsLoading(false);
      }
    })();
  }, [lang]);

  return (
    <NextIntlClientProvider locale={lang} messages={messages}>
      <ThemeProvider theme={DEFAULT_THEME}>
        <StyledContainer $isLoading={loading}>
          <PayPalScriptProvider
            options={{ clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID }}
          >
            {loading ? (
              <Loading />
            ) : (
              <>
                <Header />
                <StyledMain>{children}</StyledMain>
                <Footer />
              </>
            )}
          </PayPalScriptProvider>
        </StyledContainer>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
};

export default Layout;
