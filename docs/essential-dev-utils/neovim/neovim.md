---
sidebar_position: 1
title: Neovim
sidebar_label: Neovim
---

# Neovim

A fast, keyboard-driven editor. These are the most common commands for daily use.

---

## Modes

| Key | What it does |
|---|---|
| `i` | Enter insert mode |
| `Esc` | Go back to normal mode |
| `v` | Enter visual mode (select text) |
| `V` | Select whole lines |
| `:` | Enter command mode |

---

## Navigation

| Key | What it does |
|---|---|
| `h j k l` | Move left / down / up / right |
| `w` | Jump to next word |
| `b` | Jump to previous word |
| `gg` | Go to top of file |
| `G` | Go to bottom of file |
| `0` | Go to start of line |
| `$` | Go to end of line |
| `Ctrl-d` | Scroll down half page |
| `Ctrl-u` | Scroll up half page |
| `%` | Jump to matching bracket |

---

## Editing

| Key | What it does |
|---|---|
| `dd` | Delete current line |
| `yy` | Copy current line |
| `p` | Paste after cursor |
| `u` | Undo |
| `Ctrl-r` | Redo |
| `ciw` | Change word under cursor |
| `di(` | Delete content inside parentheses |
| `>>`  | Indent line |
| `<<` | Un-indent line |

---

## Search

| Key | What it does |
|---|---|
| `/text` | Search forward |
| `?text` | Search backward |
| `n` | Next match |
| `N` | Previous match |
| `*` | Search word under cursor |

---

## Files and Buffers

| Key | What it does |
|---|---|
| `:w` | Save file |
| `:q` | Quit |
| `:wq` | Save and quit |
| `:q!` | Quit without saving |
| `:e filename` | Open a file |
| `:bn` | Next buffer |
| `:bp` | Previous buffer |
| `:bd` | Close buffer |

---

## Windows and Splits

| Key | What it does |
|---|---|
| `:sp` | Split horizontally |
| `:vsp` | Split vertically |
| `Ctrl-w h/j/k/l` | Move between splits |
| `Ctrl-w q` | Close current split |

---

## Telescope

[Telescope](https://github.com/nvim-telescope/telescope.nvim) is a fuzzy finder. It lets you search files, text, and more from a floating window.

### Open the file finder

```
<Space>ff
```

Type part of the filename to filter. Press `Enter` to open, `Ctrl-v` to open in a vertical split.

### Common Telescope shortcuts

| Key | What it does |
|---|---|
| `<Space>ff` | Find files |
| `<Space>fg` | Live grep (search text in all files) |
| `<Space>fb` | Browse open buffers |
| `<Space>fh` | Search help tags |
| `<Space>fr` | Recent files |

Inside the Telescope window:

| Key | What it does |
|---|---|
| `Ctrl-j / Ctrl-k` | Move down / up in results |
| `Enter` | Open selected file |
| `Ctrl-v` | Open in vertical split |
| `Ctrl-x` | Open in horizontal split |
| `Ctrl-t` | Open in new tab |
| `Esc` | Close Telescope |

---

## ToggleTerm

[ToggleTerm](https://github.com/akinsho/toggleterm.nvim) opens a terminal inside Neovim. You can toggle it without leaving the editor.

### Toggle the terminal

```
:ToggleTerm
```

Or map it to a key (common setup):

```
<Ctrl-\>
```

### Multiple terminals

```bash
:ToggleTerm 1   # open terminal 1
:ToggleTerm 2   # open terminal 2
```

Each number is a separate terminal session.

### Inside the terminal

| Key | What it does |
|---|---|
| `i` | Enter insert mode to type commands |
| `Ctrl-\ Ctrl-n` | Exit insert mode (go back to normal mode) |
| `<Ctrl-\>` | Hide / show the terminal |

---

## Quick Reference

| Key | What it does |
|---|---|
| `<Space>ff` | Find files with Telescope |
| `<Space>fg` | Search text across files |
| `:ToggleTerm` | Open / close terminal |
| `Ctrl-\` | Toggle terminal (if mapped) |
| `dd` | Delete line |
| `yy` | Copy line |
| `u` | Undo |
| `Ctrl-r` | Redo |
| `ciw` | Change word |
| `/text` | Search in file |
| `:w` | Save |
| `:q!` | Quit without saving |
