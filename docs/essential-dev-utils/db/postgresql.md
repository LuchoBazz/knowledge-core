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

## Check Index Status and Safe Drop

```sql
SELECT indexrelid::regclass AS index_name,
       indisvalid,
       indisready,
       indislive
FROM pg_index
WHERE indexrelid::regclass::text = 'new_cart_id_idx';

DROP INDEX CONCURRENTLY IF EXISTS new_cart_id_idx;

SET statement_timeout = '300s';

SHOW statement_timeout;

```

### Explanation

This sequence of commands is used to verify the status of an index, remove it without locking the table, and configure session timeouts.

* `SELECT ... FROM pg_index`: Checks the health of the index `new_cart_id_idx`.
* `indisvalid`: Returns true if the index is valid for queries. If false, the index creation likely failed.
* `indisready`: Shows if the index is ready for inserts/updates.


* `DROP INDEX CONCURRENTLY`: Removes the index without locking the table against writes. This is the recommended way to drop indexes in production environments.
* `SET statement_timeout = '300s'`: Sets a safety limit for the current session, ensuring that subsequent queries are aborted if they take longer than 300 seconds (5 minutes).
* `SHOW statement_timeout`: Verifies that the timeout configuration has been applied correctly.

Use this workflow when managing indexes on live databases to avoid downtime or performance degradation.

---

## Monitor Active Database Activity

```sql
SELECT pid, usename, state, query 
FROM pg_stat_activity 
WHERE state != 'idle';

```

### Explanation

This query retrieves a list of currently running processes in the database, excluding idle connections.

* `FROM pg_stat_activity`: Queries the system view that shows information related to server processes.
* `state != 'idle'`: Filters out connections that are currently doing nothing, focusing only on active, running, or blocked queries.
* `pid`: The process ID, useful if you need to terminate a specific query using `pg_terminate_backend(pid)`.
* `query`: Displays the actual SQL text being executed.

This is an essential command for troubleshooting performance issues, identifying stuck queries, or monitoring real-time database load.

## Retrieve Enum Values

```sql
-- get the values of an enum
SELECT *
FROM pg_enum
WHERE enumtypid = 'enum_order_products_status'::regtype
ORDER BY enumsortorder;

```

### Explanation

This query retrieves the list of valid labels defined for a specific ENUM type, preserving their defined order.

* `FROM pg_enum`: Queries the system catalog that stores specific information about enum types and their labels.
* `'enum_order_products_status'::regtype`: Dynamically looks up the internal Object ID (OID) for the enum named `enum_order_products_status`. This is safer and easier than manually finding the numeric ID.
* `ORDER BY enumsortorder`: Ensures the results are returned in the logical order defined in the enum (e.g., `PENDING`, `PROCESSING`, `COMPLETED`), rather than alphabetical order.

Use this when you need to programmatically verify the allowed values for a specific status column or debug schema inconsistencies.

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

---

## Retrieve rows where `identifier` is in the JSON root

```sql
SELECT *
FROM my_table
WHERE data->>'identifier' = '12345';
```

### Explanation

This SQL query finds rows where the JSON column `data` has a key `identifier` in the top level and its value is `'12345'`.

* `SELECT *`: returns all columns for matching rows.
* `FROM my_table`: use your table named `my_table`.
* `data->>'identifier'`: extracts the value of `identifier` as text from the `jsonb` column `data`.
* `= '12345'`: compares the extracted text with `'12345'`.

This query is useful when `identifier` is stored at the top level of the JSON object.

---

## Use JSON containment to check key/value

```sql
SELECT *
FROM my_table
WHERE data @> '{"identifier":"12345"}'::jsonb;
```

### Explanation

This query checks if the JSON object contains the pair `"identifier": "12345"`.

* `data @> ...`: the `@>` operator tests whether the left JSON contains the right JSON.
* `'{"identifier":"12345"}'::jsonb`: a small JSON object on the right, cast to `jsonb`.

Use this when you want to check that the JSON contains a given key and value. It also works well when you check multiple keys at once.

---

## When `identifier` is inside a nested object

Example JSON row:

```json
{ "person": { "identifier": "12345", "type": "passport" } }
```

Query:

```sql
SELECT *
FROM my_table
WHERE data->'person'->>'identifier' = '12345';
```

### Explanation

This finds `identifier` inside the nested object `person`.

* `data->'person'`: returns the JSON object at key `person`.
* `->>'identifier'`: then gets the `identifier` value as text.
* Compare with `'12345'` as before.

Use this when your JSON groups data inside objects (like `person`, `owner`, `user`, etc.).

---

## Use path extraction with `#>>` for nested keys

```sql
SELECT *
FROM my_table
WHERE data #>> '{person,identifier}' = '12345';
```

### Explanation

`#>>` reads a text value using a path array.

* `'{person,identifier}'`: the path — first `person`, then `identifier`.
* `#>>` returns text directly, so you can compare with `=`.

This is a compact way to reach deep keys without chaining multiple `->` operators.

---

## Partial match and case-insensitive search

```sql
SELECT *
FROM my_table
WHERE data->>'identifier' ILIKE '123%';
```

### Explanation

This does a case-insensitive match and finds identifiers that start with `123`.

* `ILIKE` works like `LIKE` but ignores case.
* `'123%'` means "starts with 123".

Use this for searches where you only know part of the identifier or want case-insensitive matches.

---

## Numeric comparison (when the JSON value is numeric)

```sql
SELECT *
FROM my_table
WHERE (data->>'identifier')::bigint > 1000;
```

### Explanation

This converts the `identifier` text to a number and compares it.

* `(data->>'identifier')::bigint`: cast the extracted text to a big integer.
* `> 1000`: numeric comparison.

Only use this when the JSON value is a number or a numeric string. If the cast fails, the query will error.

---

## Use jsonpath (Postgres 12+)

```sql
SELECT *
FROM my_table
WHERE jsonb_path_exists(data, '$.identifier ? (@ == "12345")');
```

### Explanation

This uses `jsonpath` to check if `identifier` equals `"12345"`.

* `jsonb_path_exists(data, '<path>')`: returns true if the path condition matches.
* `$.identifier`: the `identifier` at the root.
* `? (@ == "12345")`: a filter that checks equality.

`jsonpath` is powerful for complex conditions and arrays.

---

## Create indexes to speed up searches

```sql
-- fast equality on the identifier value
CREATE INDEX idx_my_table_identifier ON my_table ((data->>'identifier'));

-- general jsonb index for containment and other jsonb queries
CREATE INDEX idx_my_table_data_gin ON my_table USING gin (data);
```

### Explanation

* The first index is an expression (btree) on `data->>'identifier'`. Use it when you run many equality queries like `= '12345'`.
* The second index is a GIN index on the whole `jsonb` column. It helps queries that use `@>` and other jsonb operators.

Create the index that fits your common queries. You can have both if needed.

---

## Short notes

* Replace `my_table` and `data` with your real table and column names.
* Use `EXPLAIN ANALYZE` to check query plans and see if indexes are used.
* Test casting and `ILIKE` carefully to avoid errors or slow queries.

If you want, I can give a small full example with `CREATE TABLE`, some `INSERT` rows, and `EXPLAIN ANALYZE` for one query.
