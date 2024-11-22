---
sidebar_position: 1
title: Advanced Learning Prompts
sidebar_label: Advanced Learning
---

*Prompts designed to generate questions and answers for assessing the comprehension of specific topics.*

```ts title="prompt"
I will provide you with a [TEXT_TYPE] document. Please analyze its content and generate [NUMBER_OF_QUESTIONS] questions at a [LEVEL] level in the [FORMAT] format, along with their correct answers. The questions should comprehensively cover the key points of the text, ensuring they are clear and focused on essential concepts to facilitate effective learning. Avoid trivial questions and prioritize the main ideas.

"[TEXT]" 

Could you provide me with the answer in [RESPONSE_LANGUAGE]?

[TEXT_TYPE] = TECHNICAL | ACADEMIC | HISTORICAL
[LEVEL] = BASIC | INTERMEDIATE | ADVANCED
[FORMAT] = OPEN-ENDED | TRUE/FALSE | MULTIPLE CHOICE | ALL OPEN-ENDED
[RESPONSE_LANGUAGE] = SPANISH | ENGLISH
[TEXT] = TEXT_HERE
```