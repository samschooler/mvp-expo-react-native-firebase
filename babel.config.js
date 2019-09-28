module.exports = function(api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            assets: "./assets",
            components: "./src/components",
            constants: "./src/constants",
            modules: "./src/modules",
            screens: "./src/screens",
            types: "./src/types"
          }
        }
      ]
    ]
  };
};
