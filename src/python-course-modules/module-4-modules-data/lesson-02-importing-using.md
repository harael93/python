# Lesson 02: Importing and Using Modules

## Importing Modules
You can import modules using the `import` statement.

```python
import math
print(math.sqrt(16))  # Output: 4.0
```

## Importing Specific Functions
```python
from math import sqrt
print(sqrt(25))  # Output: 5.0
```

## Aliasing Modules
```python
import numpy as np
print(np.array([1, 2, 3]))
```

## Reloading Modules
Sometimes you need to reload a module after making changes (advanced usage).
```python
import importlib
importlib.reload(math)
```

## Exercise
- Import the `random` module and use it to generate a random number.
- Try importing a function from a module using `from ... import ...` syntax.
