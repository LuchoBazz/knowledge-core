---
sidebar_position: 1
title: Interesting Terminal Applications
sidebar_label: Interesting Apps
---

## Countdown

A minimal terminal countdown timer.

- **Repo:** [antonmedv/countdown](https://github.com/antonmedv/countdown)

### Install

```bash
# Homebrew
brew install antonmedv/tap/countdown

# Go
go install github.com/antonmedv/countdown@latest
```

### Usage

```bash
# Countdown from a specific time
countdown 25m

# Countdown to a specific moment
countdown 18:30

# With a label
countdown 5m "Pomodoro"
```

The timer renders in the terminal in real time. When it reaches zero it rings the terminal bell.

---

## spotatui

A terminal UI for Spotify — browse and control playback without leaving your shell.

- **Repo:** [LargeModGames/spotatui](https://github.com/LargeModGames/spotatui)
- **Site:** [spotatui.com](https://spotatui.com)

### Install

```bash
# Homebrew
brew install spotatui

# Or download the binary from the GitHub releases page
```

> **Requirement:** A Spotify Premium account and an app registered at [developer.spotify.com](https://developer.spotify.com) to get a `Client ID` and `Client Secret`.

### Setup

```bash
# First run — opens the auth flow in your browser
spotatui
```

On first launch it asks for your `Client ID` and `Client Secret`, then stores the token locally. Subsequent launches go straight to the TUI.

### Keybindings

| Key | Action |
|-----|--------|
| `↑ / ↓` | Navigate list |
| `Enter` | Play selected |
| `Space` | Pause / resume |
| `n` | Next track |
| `p` | Previous track |
| `q` | Quit |

---

## Himalaya

A CLI email client. Read, write, and manage email from the terminal.

- **Repo:** [pimalaya/himalaya](https://github.com/pimalaya/himalaya)

### Install

```bash
# Homebrew
brew install himalaya

# Cargo
cargo install himalaya
```

### Configure

```bash
# Generates a guided config at ~/.config/himalaya/config.toml
himalaya account configure
```

The wizard asks for your IMAP/SMTP host, port, login, and password (or OAuth2 credentials).

### Basic Usage

```bash
# List messages in INBOX
himalaya envelope list

# Read a message by id
himalaya message read 42

# Send an email (opens $EDITOR)
himalaya message write

# Reply to a message
himalaya message reply 42

# List folders / mailboxes
himalaya folder list

# Move a message to a folder
himalaya message move 42 Archive
```

All commands accept `--account <name>` to switch between configured accounts.
