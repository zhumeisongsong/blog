export const defaultCategories = {
  "system-design": "system-design",
  ddd: "ddd",
  clean: "clean",
  architecture: "architecture",
  "clean-architecture": "clean-architecture",
  solid: "solid",
  basic: "basic",
  typescript: "typescript",
  react: "react",
  nextjs: "nextjs",
  "semantic-release": "semantic-release",
  git: "git",
  oss: "oss",
  "gas-station": "gas-station",
  project: "project",
} as const;

export type Category =
  (typeof defaultCategories)[keyof typeof defaultCategories];
