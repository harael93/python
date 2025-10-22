# Lesson 02: Classes and Objects

## What is a Class?
A class is a blueprint for creating objects. It defines the attributes and methods that the objects will have.

## What is an Object?
An object is an instance of a class. You can create multiple objects from the same class, each with its own data.

## Defining a Class
```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    def greet(self):
        print(f"Hello, my name is {self.name} and I am {self.age} years old.")
```

## Creating Objects
```python
person1 = Person("Alice", 30)
person2 = Person("Bob", 25)

person1.greet()  # Output: Hello, my name is Alice and I am 30 years old.
person2.greet()  # Output: Hello, my name is Bob and I am 25 years old.
```

## The `__init__` Method
- Called when an object is created
- Initializes the object's attributes

## Exercise
- Create a `Book` class with attributes `title` and `author`, and a method `describe()` that prints information about the book.
