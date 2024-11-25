---
sidebar_position: 1
title: Typescript Language
sidebar_label: Typescript
---

## Using Jest Spy Instances for Testing

```ts
let spy: jest.SpyInstance;

beforeEach(() => {
  spy = jest
    .spyOn(someModule, "someMethod")
    .mockImplementation(defaultValue);
});

afterEach(() => {
  spy.mockRestore();
});
```

### Explanation
This code snippet demonstrates how to use Jest's spy functions to mock and restore functionality during testing. Below is a detailed explanation of each part:

- **`let spy: jest.SpyInstance;`**  
  Declares a variable `spy` to hold the spy instance. This ensures the spy can be accessed and restored later in the test lifecycle.

- **`beforeEach(() => { ... });`**  
  Defines a setup function that runs before each test case. Inside this block:
  - `jest.spyOn`: Creates a spy for the `someMethod` method of the `someModule` object.
  - `.mockImplementation`: Temporarily replaces the original implementation with the `defaultValue` function for controlled testing.

- **`afterEach(() => { ... });`**  
  Defines a cleanup function that runs after each test case. It calls `spy.mockRestore()` to:
  - Remove the mocked implementation.
  - Restore the original method behavior, ensuring no side effects persist between test cases.

### Benefits
Using this approach ensures isolation between tests and prevents unintended interactions with the original implementation of `someMethod`. It is particularly useful for testing code that depends on specific configurations or behaviors provided by the mocked method.
