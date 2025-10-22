# Lesson 05: Working with External Libraries

## What are External Libraries?
External libraries are packages not included in the Python standard library. You can install them using `pip`.

## Popular Data Libraries
- **NumPy**: Powerful numerical operations
- **pandas**: Data analysis and manipulation

## Installing Libraries
```bash
pip install numpy pandas
```

## Using NumPy
```python
import numpy as np
arr = np.array([1, 2, 3])
print(arr * 2)  # Output: [2 4 6]
```

## Using pandas
```python
import pandas as pd
data = {'Name': ['Alice', 'Bob'], 'Age': [30, 25]}
df = pd.DataFrame(data)
print(df)
```

## Exercise
- Install `numpy` and `pandas`.
- Create a NumPy array and perform a calculation.
- Create a pandas DataFrame and display it.
