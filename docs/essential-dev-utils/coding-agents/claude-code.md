---
sidebar_position: 1
title: Claude Code CLI
sidebar_label: Claude Code CLI
---

# Claude Code CLI

[Claude Code](https://docs.anthropic.com/en/docs/claude-code) is Anthropic's official CLI coding agent. It runs in your terminal, reads your files, edits code, runs commands, and can complete multi-step tasks autonomously.

## Installation

```bash
npm install -g @anthropic-ai/claude-code
```

You need an `ANTHROPIC_API_KEY` in your environment. Set it in your shell profile:

```bash
export ANTHROPIC_API_KEY=your_api_key_here
```

## Start a Session

```bash
claude
```

This opens an interactive session in your current directory. Claude can read, edit, and create files from here.

## Run a One-Off Task

```bash
claude "Fix the failing tests in src/"
```

Pass a prompt directly to run a single task without entering the interactive mode.

## Continue the Last Session

```bash
claude --continue
```

Resumes the most recent conversation with its full context.

## Resume a Specific Session

```bash
claude --resume
```

Shows a list of recent sessions so you can pick one to continue.

## Useful Flags

| Flag | What it does |
|---|---|
| `--continue` | Resume the last conversation |
| `--resume` | Pick a past conversation to resume |
| `--model <id>` | Choose a specific Claude model |
| `--add-dir <path>` | Add an extra directory to the context |
| `--allowedTools <tools>` | Restrict which tools Claude can use |
| `--output-format json` | Print the final response as JSON (useful for scripts) |
| `--verbose` | Show detailed logs of what Claude is doing |

## Useful In-Session Commands

| Command | What it does |
|---|---|
| `/help` | Show all available commands |
| `/clear` | Clear the conversation history |
| `/compact` | Summarize the conversation to save context space |
| `/model` | Switch to a different model |
| `/add-dir <path>` | Add a directory to the current session |
| `/allowed-tools` | Show or change which tools are enabled |
| `/memory` | Edit Claude's persistent memory |
| `/status` | Show account and session information |
| `/cost` | Show token usage and estimated cost for the session |
| `/exit` | Exit Claude Code |

## Example: Fix a Bug

```bash
claude "The login endpoint returns 500 when the password is wrong. Fix it."
```

Claude reads the relevant files, applies the fix, and shows a diff.

## Example: Add a Feature

```bash
cd my-project
claude "Add pagination to the /posts endpoint. Use limit and offset query params."
```

Claude explores the codebase, edits the right files, and can run tests to verify the change.

## Example: Ask Without Editing

```bash
claude "Explain how the auth middleware works"
```

Claude reads the code and answers without making any changes.

## MCP Servers

Claude Code supports [Model Context Protocol (MCP)](https://modelcontextprotocol.io) servers. They extend Claude with extra tools like database access, browser control, or external APIs.

To add an MCP server:

```bash
claude mcp add
```

To list configured servers:

```bash
claude mcp list
```
