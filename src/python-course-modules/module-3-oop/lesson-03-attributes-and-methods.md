# Lesson 03: Attributes and Methods

## Attributes
Attributes are variables that belong to a class or object. They store information about the object.

### Instance Attributes
Defined inside the `__init__` method and are unique to each object.
```python
class Car:
    def __init__(self, make, model):
        self.make = make
        self.model = model
```

### Class Attributes
Shared by all instances of the class.
```python
class Car:
    wheels = 4  # Class attribute
    def __init__(self, make, model):
        self.make = make
        self.model = model
```

## Methods
Methods are functions defined inside a class that operate on its attributes.
```python
class Car:
    def __init__(self, make, model):
        self.make = make
        self.model = model
    def drive(self):
        print(f"Driving {self.make} {self.model}")
```

## Exercise
- Add a class attribute to the `Book` class from the previous lesson (e.g., `library_name`).
- Add a method to print the library name.
