---
sidebar_position: 1
title: Queries
sidebar_label: Queries
---

# New Relic Queries

This document contains a useful query for New Relic to count transactions within a specified time frame and filter by application name.

## Query for Transaction Count

```sql
SELECT count(*) FROM Transaction WHERE appName IN ('service-production') AND name LIKE '%queryName%' SINCE '2026-08-31T20:00 [America/Bogota]' UNTIL '2026-08-31T20:15  [America/Bogota]' FACET request.headers.origin
```

### Explanation
This query counts the number of transactions for a specific application within a defined time range. Here’s a breakdown of the command:
- `SELECT count(*)`: Selects the count of all transactions that meet the specified criteria.

- `FROM Transaction`: Indicates the data source, which in this case is the `Transaction` event.

- `WHERE appName IN ('service-production')`: Filters the results to include only those transactions where the application name is `service-production`.

- `AND name LIKE '%queryName%'`: Further filters the transactions to include only those whose names match the specified pattern (`queryName`).

- `SINCE '2026-08-31T20:00 [America/Bogota]'`: Defines the start time for the query.

- `UNTIL '2026-08-31T20:15  [America/Bogota]'`: Defines the end time for the query.

- `FACET request.headers.origin`: Groups the results by the `origin` header of the requests, allowing for insights into where the requests originated.

---

## Transaction Duration Metrics

```sql
SELECT 
  min(duration) as min_time,
  average(duration) as average_time,
  percentile(duration, 50, 90, 95, 99),
  max(duration) as max_time,
  stddev(duration) as stddev_time
FROM Transaction 
WHERE appName = 'service-name'
SINCE 4 hours ago
-- SINCE 1 days ago
-- SINCE 30 minutes ago

```

### Explanation

This query calculates detailed performance statistics regarding transaction durations (latency). It provides a comprehensive view of how fast or slow the application is responding. Here’s a breakdown of the command:

* `min(duration) as min_time`: Returns the shortest transaction duration found in the time window.
* `average(duration) as average_time`: Calculates the mean response time.
* `percentile(duration, 50, 90, 95, 99)`: Displays the duration at various thresholds. For example, the 99th percentile indicates that 99% of requests were faster than this value (useful for spotting outliers).
* `max(duration) as max_time`: Returns the longest transaction duration (the slowest request).
* `stddev(duration) as stddev_time`: Calculates the standard deviation, which helps measure the consistency of the response times (a lower number means more consistent performance).
* `WHERE appName = 'service-name'`: Limits the analysis to a specific service.
* `SINCE 4 hours ago`: Sets the time window for the analysis. The commented lines (`--`) show alternative common timeframes like 1 day or 30 minutes.

This query is essential for analyzing application health, identifying performance degradation, and validating Service Level Agreements (SLAs).