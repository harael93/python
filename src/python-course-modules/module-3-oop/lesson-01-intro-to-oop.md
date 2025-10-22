# Lesson 01: Introduction to Object-Oriented Programming (OOP)

## What is OOP?
Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects", which can contain data and code: data in the form of fields (attributes), and code in the form of procedures (methods).

OOP helps organize code, making it reusable, scalable, and easier to maintain.

## Key Concepts
- **Class**: Blueprint for creating objects
- **Object**: Instance of a class
- **Attribute**: Variable that belongs to an object
- **Method**: Function that belongs to an object

## Why Use OOP?
- Models real-world entities
- Promotes code reuse
- Makes code easier to maintain
- Supports abstraction and encapsulation

## Example: Real-World Analogy
A `Car` class can have attributes like `color`, `make`, and `model`, and methods like `drive()` and `brake()`.

## Simple OOP Example in Python
```python
class Dog:
    def __init__(self, name, breed):
        self.name = name
        self.breed = breed
    def bark(self):
        print(f"{self.name} says woof!")

my_dog = Dog("Buddy", "Golden Retriever")
my_dog.bark()  # Output: Buddy says woof!
```

## Exercise
- Think of a real-world object and list its possible attributes and methods.
- Create a simple class for that object in Python.
