module.exports = {
  reactStrictMode: false,
  images: {
    domains: ["res.cloudinary.com"],
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.optimization.splitChunks.cacheGroups = {};
    config.optimization.minimize = true;
    return config;
  },
};
