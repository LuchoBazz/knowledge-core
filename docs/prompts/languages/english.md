---
sidebar_position: 1
title: English Prompts
sidebar_label: 🇬🇧 English
---

### Description

This section contains prompts designed for translating text into formal English.

### Translation Prompts

*Simple request for formal English translation.*

```text title="prompt"
Can you translate this text into formal English for me?
"[TEXT]"

[TEXT] = TEXT_HERE
```

---

*Detailed request for translation, focusing on academic, business, or startup contexts.*

```text title="prompt"
Could you please translate the following text into formal English suitable for an academic document, business context, or startup environment? Ensure the tone is neutral, professional, polite, and respectful, while keeping the language simple, concise, and minimalistic.

"[TEXT]"

[TEXT] = TEXT_HERE
```

*Customizable translation prompt for precise, context-aware translations across different tones and styles.*

```text title="prompt"
I will provide you with a [TEXT] in [SOURCE_LANGUAGE]. Please translate it into [TARGET_LANGUAGE], ensuring the translation adheres to the specified criteria for tone, context, style, and other factors. The translation should be accurate, contextually appropriate, and tailored to the given parameters.

"[TEXT]"

[SOURCE_LANGUAGE] = SPANISH
[TARGET_LANGUAGE] = ENGLISH
[TONE] =  FORMAL | INFORMAL | NEUTRAL | ACADEMIC | TECHNICAL | FRIENDLY
[ENGLISH_LEVEL] = BASIC (A1-A2) | INTERMEDIATE (B1-B2) | ADVANCED (C1-C2) | NATIVE/PROFESSIONAL
[CONTEXT] = ACADEMIC | BUSINESS | DOCUMENTATION  | PERSONAL COMMUNICATION
[REGISTER] = DESCRIPTIVE | CONCISE
[TEXT] = TEXT_HERE
```


---