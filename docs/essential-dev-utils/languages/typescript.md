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

## Logs When a Node.js Instance Crashes

To track the logs when a Node.js instance encounters a crash, consider monitoring the following types of errors:

- **JavaScript heap out of memory**
- **uncaughtException**
- **unhandledRejection**

### Explanation
These logs indicate potential issues with the Node.js instance that may lead to application crashes or unexpected behavior. Here’s an overview of each type of error:
- **JavaScript heap out of memory**: This error occurs when the application exceeds the available memory heap, causing it to crash.
- **uncaughtException**: This error occurs when an unhandled exception is thrown in the Node.js process, which can lead to the termination of the process.
- **unhandledRejection**: This error happens when a promise rejection is not properly handled, potentially leading to application instability.

### Example
To handle these errors and ensure the application continues running smoothly, you can add appropriate event listeners in your Node.js application:

```javascript
process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err);
  // Handle the exception appropriately
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled rejection:', reason);
  // Handle the rejection appropriately
});

process.on('SIGUSR2', () => {
  console.log('JavaScript heap out of memory detected.');
  // Handle memory-related errors appropriately
});
```

These handlers allow you to log, manage, and respond to errors, improving the reliability of your Node.js application.

## Mocking and Testing with Jest in TypeScript
### **1. Base Code**

```typescript
// src/libs/auth.ts
export const validateToken = (token: string): Promise<string> => {
  ...
};
```
### **2. Minimal Test Example**

Complete example of a test:

```typescript
jest.mock("../../../../src/libs/auth");
import { validateToken } from "../../../../src/libs/auth";

const mockValidateToken = validateToken as jest.Mock;

describe("given a validateToken function", () => {
  beforeEach(() => {
    mockValidateToken.mockReturnValueOnce(Promise.resolve(userExample()));
  });

  afterEach(() => {
    mockValidateToken.mockClear();
  });

  it("should return mocked user data", async () => {
    const result = await validateToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9");
    expect(result).toEqual({ name: "Søren Kierkegaard" });
  });
});
```

📖 **Jest Docs**: https://jestjs.io/docs/api
---
