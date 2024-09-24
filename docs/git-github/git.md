---
sidebar_position: 1
title: Git Utils
sidebar_label: Git Utils
---

```bash
git ls-files | grep -v 'lock' | grep -v 'svg' | xargs wc -l
```

*Remove branches that have already been pushed*

```bash
git fetch -p && for branch in $(git for-each-ref --format '%(refname) %(upstream:track)' refs/heads | awk '$2 == "[gone]" {sub("refs/heads/", "", $1); print $1}'); do git branch -D $branch; done
```
