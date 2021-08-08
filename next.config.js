module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.node$/,
      loader: "node-loader",
    });
    
    config.externals = config.externals || {};
    config.externals["sharp"] = "commonjs sharp"
    return config
  }
}