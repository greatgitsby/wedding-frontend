const { NextConfig } = require("next/dist/next-server/server/config-shared");

/**
 * @type {NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  images: {
    images: {
      deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    }
  }
}

module.exports = nextConfig;