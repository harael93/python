# Lesson 01: Introduction to Modules and Packages

## What is a Module?
A module is a file containing Python code (functions, classes, variables) that can be imported and reused in other programs.

## What is a Package?
A package is a collection of modules organized in directories with an `__init__.py` file.

## Why Use Modules and Packages?
- Organize code into logical units
- Promote code reuse
- Make large projects manageable

## Example: Using a Module
```python
# math_module.py
PI = 3.14159

def area_of_circle(radius):
    return PI * radius ** 2
```

```python
# main.py
import math_module
print(math_module.area_of_circle(5))
```

## Exercise
- List some built-in Python modules you have used.
- Create a simple module with a function and import it in another file.
