import type { Preview } from '@storybook/react';
import { DEFAULT_THEME, GlobalStyles } from '../lib';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { ThemeProvider } from 'styled-components';
import { NextIntlClientProvider } from 'next-intl';
import React from 'react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      theme: DEFAULT_THEME,
    },
    Provider: ThemeProvider,
    GlobalStyles,
  }),
  Story => (
    <NextIntlClientProvider locale="en" messages={{}}>
      <Story />
    </NextIntlClientProvider>
  ),
];
