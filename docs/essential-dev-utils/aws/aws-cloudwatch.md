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

## Filter Log Messages and Count Matches

```sql
fields @timestamp, @message
| filter @message like 'SOME_ERROR'
| stats count() as total_matches
```

### Explanation
This command filters log messages to identify occurrences of a specific error and counts the total matches. Below is a breakdown of the command:
- `fields @timestamp, @message`: Specifies the fields to include in the output, in this case, the timestamp and message.
- `filter @message like 'SOME_ERROR'`: Filters log messages that contain the string "SOME_ERROR".
- `stats count() as total_matches`: Aggregates the filtered results and provides the count of occurrences, labeling the output as `total_matches`.

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

## Group Errors by Stacktrace

```sql
filter @message like "error"
| stats count(*) as total by stacktrace
| sort total desc
````

### Explanation

This query identifies the most frequent errors by filtering messages containing the term "error" and grouping them by their stacktrace. Here’s a breakdown of the command:

  - `filter @message like "error"`: Filters the log entries to include only those that contain the string "error".
  - `stats count(*) as total by stacktrace`: Aggregates the filtered results by counting the occurrences of each unique stacktrace and labeling the count as `total`.
  - `sort total desc`: Sorts the results by the total count in descending order, making it easy to spot the most recurring exceptions.
