module.exports = {
    webpack5: true,
    webpack: (config) => {
        config.externals = config.externals || {};

        config.externals["sharp"] = "commonjs sharp";

        return config;
    },
}