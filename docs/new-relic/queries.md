---
sidebar_position: 1
title: Queries
sidebar_label: Queries
---

# New Relic Queries

This document contains a useful query for New Relic to count transactions within a specified time frame and filter by application name.

## Query for Transaction Count

```sql
SELECT count(*) FROM Transaction WHERE appName IN ('service-production') AND name LIKE '%queryName%' SINCE '2024-08-31T20:00 [America/Bogota]' UNTIL '2024-08-31T20:15  [America/Bogota]' FACET request.headers.origin
```

### Explanation
This query counts the number of transactions for a specific application within a defined time range. Here’s a breakdown of the command:
- `SELECT count(*)`: Selects the count of all transactions that meet the specified criteria.

- `FROM Transaction`: Indicates the data source, which in this case is the `Transaction` event.

- `WHERE appName IN ('service-production')`: Filters the results to include only those transactions where the application name is `service-production`.

- `AND name LIKE '%queryName%'`: Further filters the transactions to include only those whose names match the specified pattern (`queryName`).

- `SINCE '2024-08-31T20:00 [America/Bogota]'`: Defines the start time for the query.

- `UNTIL '2024-08-31T20:15  [America/Bogota]'`: Defines the end time for the query.

- `FACET request.headers.origin`: Groups the results by the `origin` header of the requests, allowing for insights into where the requests originated.
