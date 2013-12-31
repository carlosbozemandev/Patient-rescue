const CracoLessPlugin = require("craco-less");
const antCssOverrides = require("./src/styles/ant-override");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: antCssOverrides,
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
