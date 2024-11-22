---
sidebar_position: 1
title: Jira Prompts
sidebar_label: Jira
---

*Generate Jira task title and description based on task type, scope, and specific context parameters.*

```ts title="prompt"
I need you to generate a Jira task title and description in English, considering the following criteria:

[TASK_TYPE] = FEATURE | BUG FIX | REFACTOR | DOCUMENTATION UPDATE | IMPROVEMENT  
[SCOPE] = BACK-END | DATABASE | INFRASTRUCTURE | UI/UX | FRONT-END | FULL-STACK
[CONTEXT] = CONTEXT_HERE

Please use the following options to guide the task generation.
```