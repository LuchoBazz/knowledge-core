---
sidebar_position: 1
title: Typescript Prompts
sidebar_label: Typescript
---

*Prompt to generate Jest tests for the provided TypeScript code, focusing on edge cases.*

```ts title="prompt"
I have the following TypeScript code:

{CODE_HERE}

Can you provide me with a set of Jest tests using `describe.each` that robustly test the code with various edge cases?

The tests should have a structure similar to this:

describe.each([
  {
    description: "should ...",
    ...,
    expected: ...,
  },
  {
    description: "should ...",
    ...,
    expected: ...,
  },
])("given ...",
  ({ description, ..., expected }: { description: string; ...; expected: ...; }) => {

    beforeEach(() => {
      ....
    });

    it(description, () => {
      const result = function(...);
      expect(result).toEqual(expected);
    });
  }
);
```


---

*Prompt for reviewing TypeScript code and suggesting improvements based on clean code principles.*

```ts title="prompt"
I would like to improve the following TypeScript code by applying clean code practices.
Please review the code and suggest improvements based on clean code principles.
The focus should be on readability, maintainability, minimalism and efficiency.
Here is the code:

{CODE_HERE}
```

