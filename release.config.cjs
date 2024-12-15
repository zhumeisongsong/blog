const { createReleaseConfig } = require("@zhumeisong/semantic-release-config");

const srcRoot = "./";
const pkgRoot = "./";

module.exports = createReleaseConfig({
  srcRoot,
  pkgRoot
});
