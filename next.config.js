module.exports = {
    webpack5: true,
    webpack: (config) => {
        config.externals = config.externals || {};

        config.externals["sharp"] = "commonjs sharp";
        config.module.rules.push(
            { test: /\.node$/, use: "node-loader"}
        );

        return config;
    },
}