/**
 * @type {import('next').NextConfig}
 */
const isGithubActions = process.env.GITHUB_ACTIONS || false;
const repo = isGithubActions
  ? process.env.GITHUB_REPOSITORY.replace(/.*?\//, "")
  : "";
const assetPrefix = isGithubActions ? `/${repo}/` : "";
const basePath = isGithubActions ? `/${repo}` : "";

const nextConfig = {
  // basePath,
  // assetPrefix,
  output: "export",

  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,

  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
};

module.exports = nextConfig;
