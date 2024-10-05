---
sidebar_position: 2
title: UUID
sidebar_label: UUID
---

## Generate a List of UUIDs in Python

```python
import uuid

def generate_uuids(n):
    return [str(uuid.uuid4()) for _ in range(n)]

# Example: Generate 5 UUIDs and print each one on a new line
n = 5
uuid_list = generate_uuids(n)

for u in uuid_list:
    print(u)
```

### Explanation
This script generates a list of Universally Unique Identifiers (UUIDs) in Python. UUIDs are commonly used to uniquely identify information across systems, providing a standardized format.

Here’s a breakdown of the Python code:
- `import uuid`: This imports the `uuid` module, which is part of Python's standard library and contains methods to generate UUIDs.
- `uuid.uuid4()`: Creates a random UUID (version 4), suitable for most general purposes.
- `str(uuid.uuid4())`: Converts the UUID object to a string format for easy printing or storing.
