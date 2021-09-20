const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config
    if (!isServer) config.externals = {"sharp": "commonjs2 sharp"};
    return config;
  }
};

module.exports = nextConfig;
