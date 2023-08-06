/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    });
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api-ninjas.com',
      },
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  experimental: {
    serverActions: true,
  },
  redirects: async () => [
    {
      source: '/',
      destination: `/en-US/home`,
      permanent: true,
    },
    {
      source: '/:lang(en|en-US)',
      destination: '/home',
      permanent: true,
    },
    {
      source: '/:lang(ru|ru-RU)',
      destination: '/ru-RU/home',
      permanent: true,
    },
  ],
};

module.exports = nextConfig;
