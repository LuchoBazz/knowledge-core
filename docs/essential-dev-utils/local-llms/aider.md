---
sidebar_position: 2
title: Aider
sidebar_label: Aider
---

# Aider

[Aider](https://aider.chat) is a terminal-based coding assistant that connects to an LLM and edits your local files directly. It works with Git, tracks what files you add to the chat, and commits changes automatically.

## Installation

```bash
pip install aider-install
aider-install
```

Or with pipx:

```bash
pipx install aider-chat
```

## Start a Session

```bash
aider
```

By default, Aider looks for an `OPENAI_API_KEY` or `ANTHROPIC_API_KEY` in your environment. To use a local model with Ollama, see the section below.

## Use a Local Model (Ollama)

Start Ollama with your model running, then launch Aider pointing to it:

```bash
aider --model ollama/qwen3:14b
```

Use `--edit-format whole` when the model struggles to produce clean diffs — it tells Aider to rewrite the full file instead:

```bash
aider --model ollama/qwen3:14b --edit-format whole
```

## Add Files to the Chat

Aider only edits files you explicitly add. You can add them at startup:

```bash
aider src/main.py src/utils.py
```

Or inside the session with the `/add` command:

```
/add src/main.py
```

## Useful In-Session Commands

| Command | What it does |
|---|---|
| `/add <file>` | Add a file to the chat so Aider can read and edit it |
| `/drop <file>` | Remove a file from the chat |
| `/ls` | List files currently in the chat |
| `/diff` | Show the last diff Aider produced |
| `/undo` | Undo the last Git commit Aider made |
| `/run <cmd>` | Run a shell command and share the output with the model |
| `/ask <question>` | Ask a question without making any edits |
| `/clear` | Clear the chat history |
| `/exit` | Exit Aider |

## Useful Flags

| Flag | What it does |
|---|---|
| `--model <name>` | Choose the model to use |
| `--edit-format whole` | Rewrite full files instead of producing diffs |
| `--no-auto-commits` | Disable automatic Git commits |
| `--yes` | Skip confirmation prompts |
| `--watch-files` | Watch files for changes and sync them to the chat |
| `--read <file>` | Add a file as read-only context (Aider won't edit it) |

## Example: Fix a Bug

```bash
aider src/api.py

# Inside the session:
> The /users endpoint returns a 500 when the user does not exist. Fix it.
```

Aider reads the file, applies the fix, and commits it.

## Example: Ask Without Editing

```
/ask What does the retry logic in src/client.py do?
```

Aider answers without touching any files.
