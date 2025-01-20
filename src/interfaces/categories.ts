export const defaultCategories = {
  "front-end": "front-end",
  "back-end": "back-end",
  "web-development": "web-development",
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
  nestjs: "nestjs",
  "semantic-release": "semantic-release",
  git: "git",
  oss: "oss",
  "gas-station": "gas-station",
  "online-master": "online-master",
  monorepo: "monorepo",
  "web-apis": "web-apis",
  algorithm: "algorithm",
  "data-structure": "data-structure",
} as const;

export type Category =
  (typeof defaultCategories)[keyof typeof defaultCategories];
