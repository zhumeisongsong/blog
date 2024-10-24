export const defaultCategories = {
  ddd: "ddd",
  architecture: "architecture",
  "system-design": "system-design",
  git: "git",
  react: "react",
  project: "project",
  basic: "basic",
  typescript: "typescript",
  "gas-station": "gas-station",
  solid: "solid",
  nextjs: "nextjs",
} as const;

export type Category =
  (typeof defaultCategories)[keyof typeof defaultCategories];
