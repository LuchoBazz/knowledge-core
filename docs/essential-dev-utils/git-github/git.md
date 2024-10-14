---
sidebar_position: 1
title: Git Utils
sidebar_label: Git Utils
---

# Git Utils

This document contains useful Git commands that streamline your workflow and help you manage your repositories effectively.

## Count Lines of Code Excluding Certain File Types

```bash
git ls-files | grep -v 'lock' | grep -v 'svg' | xargs wc -l
```

### Explanation
This command counts the number of lines of code in your Git repository, excluding files with the extensions `.lock` and `.svg`. Here’s a breakdown of the command:
- `git ls-files`: Lists all tracked files in the repository.
- `grep -v 'lock'`: Filters out any files that contain the string "lock".
- `grep -v 'svg'`: Further filters out any files that contain the string "svg".
- `xargs wc -l`: Passes the remaining files to the `wc` command, which counts the number of lines in each file.

## Remove Branches That Have Already Been Pushed

```bash
git fetch -p && for branch in $(git for-each-ref --format '%(refname) %(upstream:track)' refs/heads | awk '$2 == "[gone]" {sub("refs/heads/", "", $1); print $1}'); do git branch -D $branch; done
```

### Explanation
This command removes local branches that have already been deleted from the remote repository. Here’s how it works:
- `git fetch -p`: Fetches the latest changes from the remote repository and prunes (deletes) any remote-tracking branches that no longer exist.
- `git for-each-ref --format '%(refname) %(upstream:track)' refs/heads`: Lists all local branches along with their upstream tracking information.
- `awk '$2 == "[gone]"`: Filters for branches whose upstream branches are gone (deleted).
- `sub("refs/heads/", "", $1)`: Removes the `refs/heads/` prefix from the branch names.
- `git branch -D $branch`: Deletes the local branch.

---


## Undo Last Commit Without Pushing

```bash
git reset --soft HEAD~1 
```

### Explanation 
This command undoes the last commit in your Git repository without removing the changes from the staging area. Here’s a breakdown of the command: 
- `git reset --soft HEAD~1`: Moves the current branch pointer back by one commit, retaining all changes made in that commit in the staging area. This allows you to make further modifications or commit again without losing any work.

## Undo a Git Add

```bash
git reset 
```

### Explanation 
This command un-stages all files that were added to the staging area using git add. Here’s a breakdown of the command: 
- `git reset`: Resets the staging area to match the last commit, effectively removing all files from the staging area while keeping the changes in the working directory. This allows you to modify the files further before staging them again or committing them.

## Amending the Last Git Commit Message

```bash
git commit --amend -m "SOME_COMMENT"
```

### Explanation
This command modifies the most recent commit in your Git repository by changing its commit message. Here’s a breakdown of the command:
- `git commit --amend`: This option allows you to modify the last commit. It can be used to edit the commit message or to add changes to the commit.
- `-m "some comment"`: This flag specifies the new commit message. Replace `"some comment"` with your desired message to reflect the changes made.

Using this command is particularly useful for correcting typos or adding additional information to the commit message without creating a new commit.
