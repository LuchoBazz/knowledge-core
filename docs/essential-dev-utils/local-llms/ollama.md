---
sidebar_position: 1
title: Ollama
sidebar_label: Ollama
---

# Ollama

[Ollama](https://ollama.com) lets you run large language models locally on your Mac. This document covers the basic commands to run a model and manage which ones are currently loaded in memory.

## Run a Model

```bash
ollama run qwen3:14b
```

This downloads the model (if it's not already available locally) and starts an interactive session with it.

## Check Which Models Are Currently Running

To see which models are currently loaded into RAM and "running" on your Mac, open a new Terminal window and run:

```bash
ollama ps
```

Pressing `Enter` shows a table with the model name, its size, and how long it has been active in memory.

## Other Useful Commands

* **List all downloaded models** (running or not):

```bash
ollama list
```

* **Unload a model from memory immediately** (force Ollama to free the RAM instead of waiting for it to unload on its own):

```bash
ollama stop qwen3:14b
```

Replace `qwen3:14b` with the name of the model you want to stop.
