---
sidebar_position: 2
title: OpenCode CLI
sidebar_label: OpenCode CLI
---

# OpenCode CLI

[OpenCode](https://opencode.ai) is an open-source terminal coding agent. It connects to many AI providers (Anthropic, OpenAI, Google, and local models via Ollama), reads your files, edits code, and runs terminal commands.

## Installation

```bash
npm install -g opencode-ai
```

Or with a shell script:

```bash
curl -fsSL https://opencode.ai/install | bash
```

## Start a Session

```bash
opencode
```

This opens an interactive session in your current directory.

## Run a One-Off Task

```bash
opencode "Add error handling to the fetch calls in src/api.ts"
```

Pass a prompt directly to run a task without entering the interactive mode.

## Configure a Provider

OpenCode uses a config file at `~/.config/opencode/config.json`. Set the provider and model you want to use:

```json
{
  "provider": "anthropic",
  "model": "claude-opus-4-8"
}
```

For Anthropic, set your API key:

```bash
export ANTHROPIC_API_KEY=your_api_key_here
```

## Use a Local Model (Ollama)

Start Ollama with your model running, then launch OpenCode pointing to it:

```bash
opencode --provider ollama --model qwen3:14b
```

Or launch it directly from Ollama:

```bash
ollama launch opencode
```

## Useful Flags

| Flag | What it does |
|---|---|
| `--provider <name>` | Choose the AI provider (anthropic, openai, ollama, etc.) |
| `--model <id>` | Choose a specific model |
| `--config <path>` | Use a custom config file |
| `--verbose` | Show detailed logs of what OpenCode is doing |
| `--no-auto-approve` | Ask for confirmation before applying each change |

## Useful In-Session Commands

| Command | What it does |
|---|---|
| `/help` | Show all available commands |
| `/clear` | Clear the conversation history |
| `/model` | Switch to a different model |
| `/provider` | Switch to a different provider |
| `/undo` | Undo the last change OpenCode made |
| `/diff` | Show the last diff OpenCode produced |
| `/exit` | Exit OpenCode |

## Example: Fix a Bug

```bash
opencode "The /orders endpoint returns an empty list when the user has no orders. It should return an empty array, not null."
```

OpenCode reads the relevant files, applies the fix, and shows a diff.

## Example: Refactor Code

```bash
cd my-project
opencode "Refactor the database queries in src/db.ts to use async/await instead of callbacks."
```

OpenCode explores the codebase and edits the files.

## Example: Ask Without Editing

```bash
opencode "Explain how the retry logic in src/client.ts works"
```

OpenCode reads the file and answers without making any changes.

## Providers

OpenCode supports many providers out of the box:

| Provider | Example model |
|---|---|
| `anthropic` | `claude-opus-4-8` |
| `openai` | `gpt-4o` |
| `google` | `gemini-2.0-flash` |
| `ollama` | `qwen3:14b` |
| `groq` | `llama-3.3-70b-versatile` |
