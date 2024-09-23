/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'takara-api.spaceapp.ru',
        pathname: '/Content/**',
      },
      {
        protocol: 'https',
        hostname: 'api.selcdn.ru',
        pathname: '/v1/**',
      },
      {
        protocol: 'https',
        hostname: 'takara-admin.spaceapp.ru',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
