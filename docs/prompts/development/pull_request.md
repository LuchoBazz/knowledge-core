---
sidebar_position: 1
title: Pull Request Prompts
sidebar_label: Pull Request
---

*Prompt to generate a formal title and description for a GitHub Pull Request based on a provided Spanish description and any additional details.*

```ts title="prompt"
Can you provide me with a title and description in formal English for my GitHub Pull Request that does the following:

I will provide you with the description in Spanish.

"[TEXT]"

Please also include some additional details.

[TEXT] = HERE_TEXT
```

*Generate clear, concise, and descriptive titles for GitHub Pull Requests based on specified criteria and context.*

```ts title="prompt"
I need you to generate [NUMBER_OF_TITLES] possible titles in English for my GitHub Pull Request. The titles should be clear, concise, and descriptive of the changes made in the Pull Request, considering the following criteria:

Ensure the titles reflect the change in a way that is aligned with the project's style and naming conventions. 

Example for context: 

"[CONTEXT]"

[NUMBER_OF_TITLES] = 10
[TYPE_OF_CHANGE] = FEATURE | BUG FIX | REFACTOR | DOCUMENTATION UPDATE
[PURPOSE] = IMPROVE_PERFORMANCE | FIX_ISSUE | UPDATE_FUNCTIONALITY
[CONTEXT] = CONTEXT_HERE
```

---