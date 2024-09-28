---
sidebar_position: 1
title: AWS - CloudWatch
sidebar_label: AWS - CloudWatch
---

# AWS Cloud Watch

This document provides useful queries for AWS CloudWatch logs to filter and sort error messages.

## Query for Uncaught Exceptions

```sql
fields @timestamp, @message, @logStream, @log
| filter @message like 'uncaughtException'
| sort @timestamp desc
| limit 10000
```

### Explanation
This query retrieves log entries containing the term 'uncaughtException'. Here’s a breakdown of the command:
- `fields @timestamp, @message, @logStream, @log`: Specifies the fields to be displayed in the results.
  - `@timestamp`: The time when the log entry was created.
  - `@message`: The content of the log entry.
  - `@logStream`: The stream from which the log entry originates.
  - `@log`: The log group associated with the entry.

- `filter @message like 'uncaughtException'`: Filters the log entries to include only those that contain the specified term.

- `sort @timestamp desc`: Sorts the results by timestamp in descending order, showing the most recent entries first.

- `limit 10000`: Limits the number of returned entries to 10,000.

## Query for Unhandled Rejections

```sql
fields @timestamp, @message, @logStream, @log
| filter @message like 'unhandledRejection'
| sort @timestamp desc
| limit 10000
```

### Explanation
This query retrieves log entries containing the term 'unhandledRejection'. The breakdown is similar to the previous query:
- `fields @timestamp, @message, @logStream, @log`: Specifies the fields to be displayed in the results.
  - `@timestamp`: The time when the log entry was created.
  - `@message`: The content of the log entry.
  - `@logStream`: The stream from which the log entry originates.
  - `@log`: The log group associated with the entry.

- `filter @message like 'unhandledRejection'`: Filters the log entries to include only those that contain the specified term.

- `sort @timestamp desc`: Sorts the results by timestamp in descending order.

- `limit 10000`: Limits the number of returned entries to 10,000.
