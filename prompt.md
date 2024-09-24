# My personal prompt engineering repository

### Important Links

* https://chatgpt.com

### Development Process

---

```ts
Can you translate this text into formal English for me?
"TEXT_HERE"
```

---

```ts
Can you translate this text into formal Spanish?
"TEXT_HERE"
```

---

```ts
Can you provide me with a title and description in formal English for my GitHub Pull Request that does the following:

I will provide you with the description in Spanish.

"HERE_TEXT"

Please also include some additional details
```

---

```ts
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

```ts
I would like to improve the following TypeScript code by applying clean code practices.
Please review the code and suggest improvements based on clean code principles.
The focus should be on readability, maintainability, minimalism and efficiency.
Here is the code:

{CODE_HERE}
```