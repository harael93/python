# Lesson 05: Inheritance and Subclasses

## What is Inheritance?
Inheritance allows a class (child/subclass) to inherit attributes and methods from another class (parent/superclass). This promotes code reuse and logical hierarchy.

## Defining a Subclass
```python
class Animal:
    def __init__(self, name):
        self.name = name
    def speak(self):
        print("Animal sound")

class Dog(Animal):
    def speak(self):
        print(f"{self.name} says woof!")

my_dog = Dog("Buddy")
my_dog.speak()  # Output: Buddy says woof!
```

## The `super()` Function
Used to call methods from the parent class.
```python
class Cat(Animal):
    def speak(self):
        super().speak()
        print(f"{self.name} says meow!")
```

## Exercise
- Create a `Novel` subclass of the `Book` class with an additional attribute (e.g., `genre`).
- Override a method in the subclass.
