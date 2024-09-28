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

### Usage
Run this command in your terminal to quickly assess the number of lines of code in your repository while ignoring certain file types that may not be relevant.

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

### Usage
Use this command to keep your local repository clean by removing branches that are no longer relevant, ensuring that your branch list is up to date with the remote repository.

---
