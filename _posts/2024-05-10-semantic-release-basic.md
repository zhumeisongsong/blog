---
title: "Auto Create Release and Tag in GitHub by Semantic-Release"
excerpt: ""
coverImage: "/blog/assets/semantic-release-basic-cover.jpg"
date: "2024-05-10"
ogImage:
  url: "/blog/assets/semantic-release-basic-cover.jpg"
categories: ["semantic-release"]
pin: true
---

Tired of managing release version and tag in GitHub by hands?

Semantic-release could help you automate the entire process! 🚀

## Semantic-Release

Semantic Release analyzes your commits, determines the type of version bump (major, minor, or patch), and publishes the release with appropriate tags based on the changes.

`IMPORTANT`: All the commits should follow the **[conventional commits](https://www.conventionalcommits.org)** standard to write.

So how to follow conventional commits?

## Commitizen

Commitizen is release management tool designed for teams.

Commitizen assumes your team uses a standard way of committing rules and from that foundation, it can bump your project's version, create the changelog, and update files.

By default, commitizen uses [conventional commits](https://www.conventionalcommits.org), but you can build your own set of rules, and publish them.

## Git-Cz

[git-cz](https://github.com/streamich/git-cz) is a wrapper tool for commitizen.

Functionally, they are almost the same, but the major difference is that git-cz does not require the initialization process of the repository.

You could customize you changelog config by adding `changelog.config.cjs`, here is [my version](https://www.npmjs.com/package/@zhumeisong/git-cz-config).


## Guide Step-By-Step

### Step 1: Install Semantic Release

`pnpm install semantic-release -D`

If you want to generate a changelog, you need to install `@semantic-release/changelog` and `@semantic-release/git`:

`pnpm add -D @semantic-release/changelog @semantic-release/git`

### Step 2: Configure Your Project

Add blow to package.json:

```
 "release": {
    "branches": ["main"],
    "plugins": [
      "@semantic-release/commit-analyzer", // Analyze the commit messages
      "@semantic-release/release-notes-generator", // Generate release notes
      "@semantic-release/github", // Publish to GitHub
      "@semantic-release/changelog", // Generate a changelog
      "@semantic-release/npm", // Publish to npm
      "@semantic-release/git" // Commit and push the changes
    ]
  }

```

### Step 3: Set Up GitHub Token

Semantic Release requires access to GitHub to create releases. You need to create a GitHub token with repo permissions.

At the start of each workflow job, GitHub automatically creates a unique GITHUB_TOKEN secret to use in your workflow. You can use the GITHUB_TOKEN to authenticate in the workflow job. [About the GITHUB_TOKEN secret](https://docs.github.com/en/actions/security-for-github-actions/security-guides/automatic-token-authentication#about-the-github_token-secret)



### Step 4: Add a GitHub Action Workflow

Here is a reusable workflow for the release job: 

https://github.com/zhumeisongsong/shared-actions/blob/main/.github/workflows/reusable-semantic-release.yml

Create a workflow file in `.github/workflows/release.yml`and use the reusable workflow:

```
name: Github Release

on:
  push:
    branches:
      - main

jobs:
  setup:
    uses: zhumeisongsong/shared-actions/.github/workflows/reusable-pnpm-setup.yml@main

  release:
    needs: setup
    uses: zhumeisongsong/shared-actions/.github/workflows/reusable-semantic-release.yml@main
    secrets:
      REPO_ACCESS_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

### Step 5: Commit Changes and Push

Install git-cz by : `pnpm install git-cz -D`

Config it in package.json:
```
 "config": {
    "commitizen": {
      "path": "git-cz"
    }
  }
```

Add script in package.json:

```
"scripts": {
    "commit": "git-cz"
  }
```

Run `pnpm run commit` to submit the change.

### Step 6: Test the Setup

Make some changes to your project and commit them with conventional commit messages (e.g., fix: correct typo, feat: add new feature).

Push those changes to the main branch.

### Step 7: Verify Release

Check the Releases section of your GitHub repository to see if the release and tags were created automatically based on your commit messages.

## Additional Configuration
You can customize Semantic Release further by adding more plugins, such as:

`@semantic-release/npm` to publish to npm.

`@semantic-release/changelog` to generate a changelog.

`@semantic-release/exec` for running custom commands.

## Summary

You could check the whole config in a real repository: https://github.com/zhumeisongsong/blog, feel free to bring up any issues.
