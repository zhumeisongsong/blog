/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  output: "export",
  basePath: "/blog",
  images: { unoptimized: true }
};

module.exports = nextConfig;
