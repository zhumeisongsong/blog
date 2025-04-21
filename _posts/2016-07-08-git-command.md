---
title: "Git Command"
excerpt: ""
coverImage: "/blog/assets/git-cover.jpg"
date: "2016-07-08"
ogImage:
  url: "/blog/assets/git-cover.jpg"
categories: ['git']
pin: true
---

## Rebase to change the commit content like author etc.

`git rebase -i --root`

change pick to edit

`git commit --amend --author="Author Name <email@example.com>"`

`git rebase --continue`

`git push --force`

## Set local user

` git config --get user.email`

` git config --get user.user`

`git config user.email "email@example.com"`

`git config user.name "Author Name"`

## List author of commit

`git log --pretty=format:"%h - %an <%ae>"`

## Config git pull rebase

`git config pull.rebase true`


## Abort rebase

`git config --get pull.rebase`

`git rebase --abort`

## Rewrite commit histories of current branch

### Stash the changes:

`git log --author="email-xxxxx" --oneline`

`git rebase -i commit-hash-xxxx`

You'll see an editor with a list of commits, to modify these commits, you can use the following commands:

```
pick or p: keep the commit as is
reword or r: keep the commit but edit the commit message
edit or e: keep the commit but stop for amending
squash or s: combine this commit with the previous one
fixup or f: like squash but discard this commit's log message
drop or d: remove the commit
```

For example, if you want to:

```
Change the commit message: replace pick with reword
Combine both commits: change the second line to squash
Delete a commit: change pick to drop
```

`git push --force-with-lease`