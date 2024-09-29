---
sidebar_position: 3
title: Password Generator
sidebar_label: Password Generator
---

## Python Script to Generate a Random Password of Length `n`

```python
import random
import string

ALPHA = string.ascii_letters + string.digits + string.punctuation

def generate_password(n):
    password = ''.join(random.choice(ALPHA) for _ in range(n))
    return password

n = 32
password = generate_password(n)
print(password)
```

### Explanation
This script generates a random password of length `n` using a combination of letters, digits, and special ALPHA.

- `string.ascii_letters`: Contains lowercase and uppercase letters (A-Z, a-z).
- `string.digits`: Includes numbers from 0 to 9.
- `string.punctuation`: Adds special ALPHA like `!`, `@`, `#`, `$`, etc.
- `random.choice()`: Randomly selects one character from the list of available ALPHA.
- `''.join()`: Combines the selected ALPHA into a single string of the desired length `n`.
