# Lesson 06: Polymorphism and Method Overriding

## What is Polymorphism?
Polymorphism allows different classes to be treated as instances of the same class through a common interface. It enables the same method name to behave differently in different classes.

## Method Overriding
A subclass can provide a specific implementation of a method that is already defined in its parent class.

## Example
```python
class Shape:
    def area(self):
        pass

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height
    def area(self):
        return self.width * self.height

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    def area(self):
        return 3.14159 * self.radius ** 2

shapes = [Rectangle(3, 4), Circle(5)]
for shape in shapes:
    print(shape.area())
```

## Exercise
- Create a `Magazine` subclass of `Book` with a method `issue_info()`.
- Demonstrate polymorphism by calling a method on a list of `Book`, `Novel`, and `Magazine` objects.
