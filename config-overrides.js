// create-react-app internal configuration overrides

const { removeModuleScopePlugin, override, babelInclude } = require("customize-cra");
const path = require("path");

module.exports = override(
  // Allow imports outside the frontend src/ directory
  removeModuleScopePlugin(),

  // Include the Lora API and API Server TypeScript files. In the bundlespec of
  // this project those locations need to be included in compilation
  babelInclude([path.resolve("src"), path.resolve("../src/common")])
);
