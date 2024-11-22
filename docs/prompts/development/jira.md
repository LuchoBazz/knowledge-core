---
sidebar_position: 1
title: Jira Prompts
sidebar_label: Jira
---

*Generate Jira task title and description based on task type, scope, and specific context parameters.*

```ts title="prompt"
I need you to generate a Jira task title and description in [LANGUAGE], considering the following criteria:

[LANGUAGE] = ENGLISH
[TASK_TYPE] = FEATURE | BUG FIX | REFACTOR | DOCUMENTATION UPDATE | IMPROVEMENT  
[SCOPE] = BACK-END | DATABASE | INFRASTRUCTURE | UI/UX | FRONT-END | FULL-STACK
[CONTEXT] = CONTEXT_HERE

Please use the following options to guide the task generation.
```

*Generate clear and concise Jira task titles based on type, scope, and context parameters provided.*

```ts title="prompt"
I need you to generate [NUMBER_OF_TITLES] Jira task titles in [LANGUAGE], considering the following criteria:

[LANGUAGE] = ENGLISH
[TASK_TYPE] = FEATURE | BUG FIX | REFACTOR | DOCUMENTATION UPDATE | IMPROVEMENT
[SCOPE] = BACK-END | DATABASE | INFRASTRUCTURE | UI/UX | FRONT-END | FULL-STACK
[CONTEXT] = CONTEXT_HERE

Please generate [NUMBER_OF_TITLES] clear and concise task titles based on these parameters.
```