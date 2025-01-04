/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    reactRefresh: false,
  },

  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
};

module.exports = nextConfig;
