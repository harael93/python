# Lesson 03: Creating Your Own Modules

## How to Create a Module
A module is simply a `.py` file. You can define functions, classes, and variables in it.

## Example
```python
# greetings.py

def say_hello(name):
    print(f"Hello, {name}!")
```

```python
# main.py
import greetings
greetings.say_hello("Alice")
```

## Organizing with Packages
Create a folder with an `__init__.py` file and place your modules inside.

## Exercise
- Create a module with a function that returns the square of a number.
- Import and use your module in another file.
