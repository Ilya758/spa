import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-styling',
  ],
  staticDirs: [
    {
      from: '../public/fonts',
      to: 'public/fonts',
    },
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async config => {
    if (config) {
      if (config?.resolve?.extensions) {
        config.resolve.alias = {
          ...config.resolve.alias,
          '@': path.resolve(__dirname, '../'),
        };
        config.resolve.extensions.push('.ts', '.tsx');
      }

      if (config.module?.rules) {
        config.module.rules
          // @ts-ignore required
          .filter(rule => rule?.test?.test('.svg'))
          // @ts-ignore required
          .forEach(rule => (rule.exclude = /\.svg$/i));

        config.module.rules.push({
          test: /\.svg$/,
          use: [
            {
              loader: '@svgr/webpack',
            },
          ],
        });
      }
    }

    return config;
  },
};
export default config;
