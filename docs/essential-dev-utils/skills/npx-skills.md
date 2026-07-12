---
sidebar_position: 1
title: npx skills
sidebar_label: npx skills
---

# npx skills

`npx skills` is a CLI tool for managing reusable Claude Code skills. Skills are prompt-based plugins that extend Claude Code's behavior — you can install them from public registries, link them globally, or share your own.

## Installation

No install needed. Run directly with `npx`:

```bash
npx skills --help
```

Or install globally to use the `skills` command without `npx`:

```bash
npm install -g skills
```

---

## Adding Skills

### Add a skill to the current project

Downloads the skill into `.agents/skills/` inside your project directory:

```bash
npx skills add anthropics/skills --skill skill-creator
```

### Add a skill globally

Downloads the skill into `~/.agents/skills/`:

```bash
npx skills add anthropics/skills --skill skill-creator -g
```

Use `-g` when you want the skill available across all your projects.

### Link a global skill into a project

Instead of copying, create a symlink from the global install into your project's Claude skills folder:

```bash
ln -s ~/.agents/skills/skill-creator ~/.claude/skills/skill-creator
```

This way the skill stays up to date when you update the global copy, and you avoid duplicating files.

### Link a local skills folder into `.claude/skills`

If your project keeps skills in a `./skills/` directory at the repo root, you can link the whole folder at once:

```bash
ln -s ./skills ./.claude/skills
```

This makes every skill in `./skills/` available to Claude Code without copying anything. Useful when the team manages skills directly in the repo and everyone should get all of them automatically.

---

## Listing Skills

### List skills installed in the current project

```bash
npx skills list
```

### List globally installed skills

```bash
npx skills list -g
```

---

## Removing Skills

### Remove a skill from the current project

```bash
npx skills remove skill-creator
```

### Remove a globally installed skill

```bash
npx skills remove skill-creator -g
```

---

## Updating Skills

### Update a specific skill in the current project

```bash
npx skills update skill-creator
```

### Update a specific skill globally

```bash
npx skills update skill-creator -g
```

### Update all skills at once

```bash
npx skills update --all
npx skills update --all -g
```

---

## Searching for Skills

Browse available skills from the registry:

```bash
npx skills search <keyword>
```

Example — find skills related to testing:

```bash
npx skills search test
```

---

## Inspecting a Skill

Show the metadata and description of a skill before installing it:

```bash
npx skills info anthropics/skills --skill skill-creator
```

---

## Publishing a Skill

If you created your own skill and want to share it:

```bash
npx skills publish
```

Run this from the root of your skill directory. It packages and uploads the skill to the registry under your account.

---

## Typical Workflow

A common setup when starting on a new machine:

```bash
# 1. Install the skills you use most, globally
npx skills add anthropics/skills --skill skill-creator -g
npx skills add anthropics/skills --skill deep-research -g
npx skills add anthropics/skills --skill code-review -g

# 2. In each project, symlink only what that project needs
ln -s ~/.agents/skills/skill-creator ~/.claude/skills/skill-creator
ln -s ~/.agents/skills/code-review   ~/.claude/skills/code-review
```

This keeps your global skill library as the single source of truth, and each project opts in to only what it uses.

---

## Quick Reference

| Command | What it does |
|---|---|
| `npx skills add <repo> --skill <name>` | Install a skill into the current project |
| `npx skills add <repo> --skill <name> -g` | Install a skill globally |
| `npx skills list` | List skills in the current project |
| `npx skills list -g` | List globally installed skills |
| `npx skills remove <name>` | Remove a skill from the current project |
| `npx skills remove <name> -g` | Remove a globally installed skill |
| `npx skills update <name>` | Update a skill in the current project |
| `npx skills update --all -g` | Update all global skills |
| `npx skills search <keyword>` | Search the skill registry |
| `npx skills info <repo> --skill <name>` | Show skill metadata |
| `npx skills publish` | Publish your own skill |
| `ln -s ~/.agents/skills/<name> ~/.claude/skills/<name>` | Link a global skill into a project |
| `ln -s ./skills ./.claude/skills` | Link the whole local skills folder into Claude |
