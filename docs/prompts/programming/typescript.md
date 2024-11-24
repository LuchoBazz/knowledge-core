---
sidebar_position: 1
title: Typescript Prompts
sidebar_label: Typescript
---

*Prompt to generate Jest tests for the provided TypeScript code, focusing on edge cases.*

```ts title="prompt"
I have the following TypeScript code:

[CODE]

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

[CODE] = CODE_HERE
```


---

*Prompt for reviewing TypeScript code and suggesting improvements based on clean code principles.*

```ts title="prompt"
I would like to improve the following TypeScript code by applying clean code practices.
Please review the code and suggest improvements based on clean code principles.
The focus should be on readability, maintainability, minimalism and efficiency.
Here is the code:

[CODE] = CODE_HERE
```

*Prompt for asking for unit tests to be added to a specific code snippet.*

```ts title="prompt"
Could you please add unit tests for the following code snippet in Jest with Typescript?

"CODE_HERE"

Additionally, please integrate these new tests with the existing ones, ensuring that they maintain consistency in formatting and style with the current test suite. The existing tests are as follows:

"TESTS_HERE"

Thank you for your assistance!
```

*Prompt for asking for unit tests to be added to a specific code snippet.*

```ts title="prompt"
Could you please add unit tests for the following code snippet in Jest with Typescript?

"CODE_HERE"

Additionally, please integrate these new tests with the existing ones, ensuring that they maintain consistency in formatting and style with the current test suite. The existing tests are as follows:

"TESTS_HERE"

Thank you for your assistance!
```

*Prompt for asking for a cURL command to be generated, which is a command-line tool used for making HTTP requests.*
```ts title="prompt"
Could you generate a cURL command for me, considering the fields in the body, parameters, and query strings from the following code?

"CODE_HERE"

Please ensure that the cURL request correctly reflects the structure and data included in the body, URL parameters, and query strings as presented in the code
```