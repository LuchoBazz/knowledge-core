---
sidebar_position: 1
title: Utils Bash Commands
sidebar_label: Utils
---

## Running a Test Multiple Times in Sequence


```bash
for i in {1..10}; do npm run test test/index.test.ts; done 
```

### Explanation 
This command executes a specific test script in your project multiple times in succession. It is useful when you need to validate the stability of the test or ensure consistent results over several runs. Below is a breakdown of the command: 
- `for i in {1..10}`: This loop iterates 10 times, where i takes values from 1 to 10. 
- `npm run test test/index.test.ts`: Runs the specified test file (index.test.ts) using the npm command, which is common in Node.js projects. 
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

## Recursive Text Search

```bash
grep -r "nanoid" . --exclude-dir=node_modules --exclude=package-lock.json
```

### Explanation

This command searches for a specific string (in this case, "nanoid") recursively throughout the current directory, while explicitly ignoring specific directories and files to avoid unnecessary noise. Below is a breakdown of the command:

* `grep -r "nanoid" .`: Uses the `grep` tool to search recursively (`-r`) for the text "nanoid" starting from the current directory (`.`).
* `--exclude-dir=node_modules`: Excludes the `node_modules` folder from the search, which is crucial for performance as it prevents scanning thousands of library files.
* `--exclude=package-lock.json`: Excludes the `package-lock.json` file, ensuring that the results focus on your actual source code usage rather than dependency definitions.

This is extremely useful when refactoring or checking where a specific library or variable is referenced in your codebase, ensuring clean results by ignoring generated or dependency-heavy files.
