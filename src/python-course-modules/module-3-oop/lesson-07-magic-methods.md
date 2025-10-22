# Lesson 07: Special Methods and Magic Methods

## What are Magic Methods?
Magic methods (also called dunder methods) are special methods in Python that start and end with double underscores (`__`). They allow you to define how objects behave with built-in functions and operators.

## Common Magic Methods
- `__init__`: Object initialization
- `__str__`: String representation
- `__repr__`: Official string representation
- `__len__`: Length of object
- `__eq__`: Equality comparison
- `__add__`: Addition operator

## Example
```python
class Book:
    def __init__(self, title, author):
        self.title = title
        self.author = author
    def __str__(self):
        return f"{self.title} by {self.author}"
    def __len__(self):
        return len(self.title)

book = Book("Python 101", "Jane Doe")
print(str(book))      # Output: Python 101 by Jane Doe
print(len(book))      # Output: 10
```

## Exercise
- Add a `__repr__` method to the `Book` class.
- Implement `__eq__` to compare two books by title and author.
