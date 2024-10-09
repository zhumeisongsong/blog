export const defaultCategories = {
  ddd: "ddd",
  architecture: "architecture",
  git: "git",
  react: "react",
  project: "project",
  basic: "basic",
} as const;

export type Category =
  (typeof defaultCategories)[keyof typeof defaultCategories];
