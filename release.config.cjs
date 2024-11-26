const { createReleaseConfig } = require("@zhumeisong/semantic-release-config");

const name = "song's blog"; // e.g. `git-cz-config`
const srcRoot = `./`; // e.g. `npm-packages/git-cz-config`

module.exports = createReleaseConfig(name, srcRoot);
