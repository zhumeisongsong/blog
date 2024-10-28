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

You could customize you changelog config by adding `changelog.config.cjs`, here is [my version](https://github.com/zhumeisongsong/blog/blob/main/changelog.config.cjs).


## Guide Step-By-Step

### Step 1: Install Semantic Release

`pnpm install semantic-release -D`

### Step 2: Configure Your Project

Add blow to package.json:

```
 "release": {
    "branches": ["main"],
    "plugins": [
      "@semantic-release/commit-analyzer",
      "@semantic-release/release-notes-generator",
      "@semantic-release/github",
    ]
  }

```

### Step 3: Set Up GitHub Token

Semantic Release requires access to GitHub to create releases. You need to create a GitHub token with repo permissions.

- Go to your **GitHub account settings**.
- Navigate to **Developer settings** > **Personal access tokens** > **Tokens (classic)**.
- Click **Generate new token**.
- Choose a descriptive name (REPO_ACCESS_TOKEN), set expiration, and select the repo scope.
- Copy the token and save it securely.

### Step 4: Configure Environment Variables

You need to set your GitHub token in your environment. You can set this up in your CI/CD pipeline settings or locally.

- Go to your **GitHub repository**.
- Navigate to **Settings** > **Secrets and variables** > **Actions**.
- Click New repository secret and name it **REPO_ACCESS_TOKEN** or **GH_TOKEN**, then paste the token.

*GITHUB_TOKEN in an invalid name.

### Step 5: Add a GitHub Action Workflow

Create a workflow file in `.github/workflows/release.yml`:

Here is a reusable workflow for the release job: 

https://github.com/zhumeisongsong/shared-actions/blob/main/.github/workflows/reusable-semantic-release.yml

### Step 6: Commit Changes and Push

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

### Step 7: Test the Setup

Make some changes to your project and commit them with conventional commit messages (e.g., fix: correct typo, feat: add new feature).

Push those changes to the main branch.

### Step 8: Verify Release

Check the Releases section of your GitHub repository to see if the release and tags were created automatically based on your commit messages.

## Additional Configuration
You can customize Semantic Release further by adding more plugins, such as:

`@semantic-release/npm` to publish to npm.

`@semantic-release/changelog` to generate a changelog.

`@semantic-release/exec` for running custom commands.

## Summary

You could check the whole config in a real repository: https://github.com/zhumeisongsong/blog, feel free to bring up any issues.
