---
sidebar_position: 1
title: PostgreSQL
sidebar_label: PostgreSQL
---

## Retrieve PostgreSQL Autovacuum Settings

```sql
SELECT *
FROM pg_settings 
WHERE name LIKE '%autovacuum%';
```

### Explanation
This SQL query retrieves all configuration settings related to autovacuum in PostgreSQL. Here’s a breakdown of the query:
- `SELECT *`: Selects all columns from the result set to provide comprehensive information about each setting.
- `FROM pg_settings`: Queries the `pg_settings` system catalog, which contains configuration parameters for the PostgreSQL instance.
- `WHERE name LIKE '%autovacuum%'`: Filters the settings to include only those whose names contain the substring `autovacuum`.

This query is useful for analyzing and optimizing autovacuum behavior in a PostgreSQL database.
