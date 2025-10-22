# Lesson 04: Encapsulation and Access Control

## What is Encapsulation?
Encapsulation is the concept of hiding the internal state of an object and requiring all interaction to be performed through methods. This protects the integrity of the data.

## Access Modifiers in Python
- **Public**: Accessible from anywhere (`self.attribute`)
- **Protected**: Indicated by a single underscore (`self._attribute`), should not be accessed directly
- **Private**: Indicated by double underscores (`self.__attribute`), name-mangled to prevent direct access

## Example
```python
class BankAccount:
    def __init__(self, owner, balance):
        self.owner = owner          # Public
        self._balance = balance    # Protected
        self.__pin = "1234"        # Private
    def deposit(self, amount):
        self._balance += amount
    def get_balance(self):
        return self._balance
```

## Why Use Encapsulation?
- Prevents accidental modification
- Controls how data is accessed and changed
- Improves code maintainability

## Exercise
- Add a private attribute to the `Book` class and a method to access it safely.
