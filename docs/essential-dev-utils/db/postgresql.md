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

---

## Retrieve Rows Containing a Specific Tag (Method 1)

```sql
WHERE 'INFO' = ANY(tags);
```

### Explanation

This condition checks if the value `'INFO'` exists inside the array column `tags`.

* `'INFO'`: The tag we want to search for.
* `= ANY(tags)`: Tests whether `'INFO'` matches at least one element of the array `tags`.

This method is useful when you want to see if a single value is present inside an array column.

---

## Retrieve Rows Containing a Specific Tag (Method 2)

```sql
WHERE tags @> ARRAY['INFO'];
```

### Explanation

This condition checks if the array column `tags` contains the array `['INFO']`.

* `tags`: The array column.
* `@>`: The "contains" operator in PostgreSQL.
* `ARRAY['INFO']`: An array with one element, `'INFO'`.

This method is useful to test if the array column includes all values from another array. In this case, it checks if `tags` contains `'INFO'`.
