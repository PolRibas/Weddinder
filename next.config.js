/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["es", "en", "fr"],
    defaultLocale: "es",
  },
  images: {
    domains: ['localtree-images.s3.eu-central-1.amazonaws.com'],
  },
};

module.exports = nextConfig;