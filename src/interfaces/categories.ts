export const defaultCategories = {
  ddd: "ddd",
  architecture: "architecture",
  git: "git",
} as const;

export type Category =
  (typeof defaultCategories)[keyof typeof defaultCategories];
