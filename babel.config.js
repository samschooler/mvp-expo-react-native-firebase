module.exports = function(api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            api: "./src/api",
            assets: "./assets",
            components: "./src/components",
            constants: "./src/constants",
            modules: "./src/modules",
            screens: "./src/screens",
            store: "./src/store",
            types: "./src/types"
          }
        }
      ]
    ]
  };
};
