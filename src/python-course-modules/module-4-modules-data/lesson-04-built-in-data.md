# Lesson 04: Built-in Data Modules

## Useful Built-in Modules
- `os`: Interact with the operating system
- `sys`: Access system-specific parameters
- `datetime`: Work with dates and times
- `json`: Handle JSON data
- `csv`: Read and write CSV files

## Examples
```python
import os
print(os.getcwd())  # Current working directory

import sys
print(sys.version)  # Python version

import datetime
now = datetime.datetime.now()
print(now)

import json
data = {"name": "Alice", "age": 30}
json_str = json.dumps(data)
print(json_str)

import csv
with open('data.csv', 'w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(["Name", "Age"])
    writer.writerow(["Bob", 25])
```

## Exercise
- Use the `os` module to list all files in the current directory.
- Use the `datetime` module to print today's date.
