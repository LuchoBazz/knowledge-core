---
sidebar_position: 2
title: Docs Generator Prompts
sidebar_label: Docs Generator
---

*Prompt to generate a formal title and description for a GitHub Pull Request based on a provided Spanish description and any additional details.*

```text
I have my documentation in Markdown with the following format:

"[FORMAT]"

I would like you to generate documentation in Markdown that follows the same format as the example above. The documentation should be written in formal English suitable for an academic document, business context, or startup environment. Ensure the tone is neutral, professional, polite, and respectful, while maintaining simple, concise, and minimalistic language.

"[CODE]"

Please provide all the Markdown content enclosed within triple backticks, ensuring that all inner instances of triple backticks are removed.

[FORMAT] = FORMAT_EXAMPLE_HERE
[CODE] = CODE_HERE
```

---

*This prompt outlines guidelines for handling creative content by providing summaries or analyses instead of verbatim reproductions, and linking to sources for further information.*

```text
Please convert the following prompt into the following JSON structure:

"[PROMPT]"

{
    "title": "...",
    "description": "...",
    "prompt": "...",
    "tags": [...]
}

Instructions for each field:

- Title: Extract the main idea of the prompt and summarize it in less than 15 words.
- Description: Write a 50-word description of what the prompt is about, providing a concise overview.
- Prompt: Decode the given prompt, removing any special characters or encoded elements, and ensure it is in a clear and readable format.
- Tags: Select a few relevant tags (e.g., "translation", "typescript", "testing") that help identify the key topics of the prompt.

[PROMPT] = PROMPT_HERE
```