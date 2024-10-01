---
sidebar_position: 1
title: Utils Bash Commands
sidebar_label: Utils
---

## Running a Test Multiple Times in Sequence


```bash
for i in {1..10}; do npm run test test/loyalt.test.ts; done 
```

### Explanation 
This command executes a specific test script in your project multiple times in succession. It is useful when you need to validate the stability of the test or ensure consistent results over several runs. Below is a breakdown of the command: 
- `for i in {1..10}`: This loop iterates 10 times, where i takes values from 1 to 10. 
- `npm run test test/loyalt.test.ts`: Runs the specified test file (loyalt.test.ts) using the npm command, which is common in Node.js projects. 
- `done`: Marks the end of the loop, causing the test to be run again until the loop completes all 10 iterations.


This approach can be applied when conducting repetitive tests for reliability purposes or to observe any fluctuations in performance across multiple runs.

