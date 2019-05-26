const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  target: "serverless",
  webpack: function(cfg) {
    const originalEntry = cfg.entry;
    cfg.entry = async () => {
      const entries = await originalEntry();
      if (
        entries["main.js"] &&
        !entries["main.js"].includes("./polyfills.js")
      ) {
        entries["main.js"].unshift("./polyfills.js");
      }
      return entries;
    };
    return cfg;
  }
});
