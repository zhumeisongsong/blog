---
title: "Git Command"
excerpt: ""
coverImage: "/blog/assets/declarative-programming-cover.jpg"
date: "2018-09-11"
ogImage:
  url: "/blog/assets/declarative-programming-cover.jpg"
---

## Rebase to change the commit content like author etc.

- `git rebase -i --root`
- change pick to edit
- `git commit --amend --author="Author Name <email@example.com>"`
- `git rebase --continue`
- `git push --force`

## Set local user
- git config user.email "email@example.com"
- git config user.name "Author Name"