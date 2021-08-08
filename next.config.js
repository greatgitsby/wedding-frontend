module.exports = {
  webpack: (config) => {
    config.externals = config.externals || {};
    config.externals["sharp"] = "commonjs sharp"
    return config
  }
}