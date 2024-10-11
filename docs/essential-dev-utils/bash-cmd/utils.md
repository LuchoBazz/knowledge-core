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

## Audit Command

```bash
npm run users users.txt | tee audit_$(date +'%Y%m%d%H%M%S').txt
```

### Explanation
This command runs a task in a Node.js environment: processing user imports. It then captures the output of the user import process into a timestamped file for auditing purposes. Below is a detailed breakdown of the command:

- `npm run users users.txt`: Runs the `users` script, passing `users.txt` as an argument. This script likely handles the import or processing of users from the provided file.
- `| tee`: Pipes the output of the `users` command and writes it both to the console and to the specified file.
- `audit_import_users_$(date +'%Y%m%d%H%M%S').txt`: Creates a log file named with a timestamp (in the format `YYYYMMDDHHMMSS`), storing the output for later review or auditing. The `date` command dynamically generates the timestamp to ensure each audit file has a unique name.

This approach ensures that user imports are tracked and verifiable, which is critical for auditing and troubleshooting in production environments.
