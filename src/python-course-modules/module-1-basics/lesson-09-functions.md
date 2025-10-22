# Lesson 9: Functions

## 🛠️ What is a Function?
A function is a reusable block of code that performs a specific task. Functions help organize code and avoid repetition.

## Defining a Function
```python
def greet(name):
    print(f"Hello, {name}!")
```

## Calling a Function
```python
greet("Pedro")  # Output: Hello, Pedro!
```

## Functions with Return Values
```python
def add(a, b):
    return a + b

result = add(5, 3)
print(result)  # 8
```

## Parameters and Arguments
- **Parameter**: Variable in the function definition
- **Argument**: Value passed to the function when called

## Practical Examples
- Write a function to calculate the area of a rectangle
- Write a function to check if a number is even
- Write a function to greet multiple people in a list

## Practice Exercises
- Create a function that returns the square of a number
- Write a function that takes a list and returns the sum
- Write a function that finds the largest number in a list
- Create a function that reverses a string

## Key Takeaways
- Functions organize code and make it reusable
- Use `def` to define, call by name
- Functions can take parameters and return values
- Functions are essential for building larger programs

---
**Previous**: [Lists](./lesson-08-lists.md) | **Next**: [Dictionaries](./lesson-10-dictionaries.md)