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


## Count Messages and Calculate Size

```sql
fields @message
| stats count (*) as total, sum(strlen(@message))/1024/1024 as size by label, level, message
| sort by size desc
```

### Explanation
This query counts the total number of messages and calculates their size, grouped by specific labels, levels, and messages. The following components detail the query's functionality:

- `fields @message`: Specifies the field to analyze, which in this case is the message content.
- `stats count (*) as total`: Computes the total count of messages and labels it as `total`.
- `sum(strlen(@message))/1024/1024 as size`: Calculates the total size of messages in megabytes by summing the length of each message and converting the result from bytes to megabytes.
- `by label, level, message`: Groups the results based on the specified fields: `label`, `level`, and `message`.
- `sort by size desc`: Orders the output by message size in descending order, allowing for easy identification of the largest messages.