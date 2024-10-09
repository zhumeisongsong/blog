---
title: "Git Command"
excerpt: ""
coverImage: "/blog/assets/declarative-programming-cover.jpg"
date: "2016-10-08"
ogImage:
  url: "/blog/assets/declarative-programming-cover.jpg"
categories: ['git']
pin: true
---

## Rebase to change the commit content like author etc.

- `git rebase -i --root`
- change pick to edit
- `git commit --amend --author="Author Name <email@example.com>"`
- `git rebase --continue`
- `git push --force`

## Set local user

- `git config user.email "email@example.com"`
- `git config user.name "Author Name"`

## List author of commit

`git log --pretty=format:"%h - %an <%ae>"`