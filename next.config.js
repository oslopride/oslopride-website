const withCSS = require("@zeit/next-css");
const withSourceMaps = require("@zeit/next-source-maps");
const webpack = require("webpack");

const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));

const nextPlugins = compose(
  withCSS,
  withSourceMaps
);

module.exports = nextPlugins({
  target: "serverless",
  // Taken from:
  // https://github.com/zeit/next.js/blob/7e7f2c0a6df2cf6a48fa4b34beb1d5befe13fa54/examples/with-sentry/next.config.js
  env: {
    SENTRY_DSN: process.env.SENTRY_DSN
  },
  webpack: (config, { isServer, buildId }) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        "process.env.SENTRY_RELEASE": JSON.stringify(buildId)
      })
    );

    if (!isServer) {
      config.resolve.alias["@sentry/node"] = "@sentry/browser";
    }

    return config;
  }
});
