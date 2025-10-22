# Lesson 4: Functions Deep Dive

## 🎯 Advanced Function Concepts

In Module 1, we learned basic functions. Now we'll explore advanced concepts that make functions more powerful and flexible.

## Function Arguments Deep Dive

### Default Parameters
```python
def greet(name, greeting="Hello", punctuation="!"):
    return f"{greeting}, {name}{punctuation}"

# Different ways to call
print(greet("Alice"))                          # Hello, Alice!
print(greet("Bob", "Hi"))                      # Hi, Bob!
print(greet("Charlie", "Hey", "?"))            # Hey, Charlie?
print(greet("Diana", punctuation="."))         # Hello, Diana.
```

### *args - Variable Positional Arguments
```python
def calculate_average(*numbers):
    if not numbers:
        return 0
    return sum(numbers) / len(numbers)

print(calculate_average(85, 90, 78))           # 84.33
print(calculate_average(95, 87, 92, 88, 79))  # 88.2
print(calculate_average())                      # 0

def print_info(name, *hobbies):
    print(f"{name}'s hobbies:")
    for hobby in hobbies:
        print(f"  - {hobby}")

print_info("Alice", "reading", "swimming", "coding")
```

### **kwargs - Variable Keyword Arguments
```python
def create_profile(name, age, **additional_info):
    profile = {
        "name": name,
        "age": age
    }
    profile.update(additional_info)
    return profile

profile = create_profile(
    "Alice", 25, 
    city="New York", 
    job="Engineer", 
    hobby="Photography"
)
print(profile)
# {'name': 'Alice', 'age': 25, 'city': 'New York', 'job': 'Engineer', 'hobby': 'Photography'}
```

### Combining All Argument Types
```python
def complex_function(required_arg, default_arg="default", *args, **kwargs):
    print(f"Required: {required_arg}")
    print(f"Default: {default_arg}")
    print(f"Extra positional args: {args}")
    print(f"Keyword args: {kwargs}")

complex_function("hello", "world", 1, 2, 3, key1="value1", key2="value2")
```

## Lambda Functions (Anonymous Functions)

### Basic Lambda Syntax
```python
# Regular function
def square(x):
    return x * x

# Lambda equivalent
square_lambda = lambda x: x * x

print(square(5))        # 25
print(square_lambda(5)) # 25
```

### Lambda with Multiple Arguments
```python
# Calculate area of rectangle
area = lambda length, width: length * width
print(area(5, 3))  # 15

# Find maximum of two numbers
max_two = lambda a, b: a if a > b else b
print(max_two(10, 7))  # 10
```

### Lambdas with Built-in Functions
```python
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Filter even numbers
evens = list(filter(lambda x: x % 2 == 0, numbers))
print(evens)  # [2, 4, 6, 8, 10]

# Square all numbers
squares = list(map(lambda x: x**2, numbers))
print(squares)  # [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

# Sort students by grade
students = [("Alice", 85), ("Bob", 90), ("Charlie", 78)]
students.sort(key=lambda student: student[1])
print(students)  # [('Charlie', 78), ('Alice', 85), ('Bob', 90)]
```

## Higher-Order Functions

Functions that take other functions as arguments or return functions:

### Functions as Arguments
```python
def apply_operation(numbers, operation):
    return [operation(num) for num in numbers]

def double(x):
    return x * 2

def square(x):
    return x * x

numbers = [1, 2, 3, 4, 5]
doubled = apply_operation(numbers, double)
squared = apply_operation(numbers, square)

print(f"Doubled: {doubled}")  # [2, 4, 6, 8, 10]
print(f"Squared: {squared}")  # [1, 4, 9, 16, 25]
```

### Functions Returning Functions
```python
def create_multiplier(factor):
    def multiplier(number):
        return number * factor
    return multiplier

# Create specific multiplier functions
double = create_multiplier(2)
triple = create_multiplier(3)

print(double(5))  # 10
print(triple(5))  # 15
```

## Decorators

Decorators modify or enhance functions without changing their code:

### Basic Decorator
```python
def my_decorator(func):
    def wrapper(*args, **kwargs):
        print("Something before the function")
        result = func(*args, **kwargs)
        print("Something after the function")
        return result
    return wrapper

@my_decorator
def say_hello(name):
    print(f"Hello, {name}!")

say_hello("Alice")
# Output:
# Something before the function  
# Hello, Alice!
# Something after the function
```

### Practical Decorators
```python
import time
from functools import wraps

# Timer decorator
def timer(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        start_time = time.time()
        result = func(*args, **kwargs)
        end_time = time.time()
        print(f"{func.__name__} took {end_time - start_time:.4f} seconds")
        return result
    return wrapper

# Retry decorator
def retry(max_attempts=3):
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            for attempt in range(max_attempts):
                try:
                    return func(*args, **kwargs)
                except Exception as e:
                    if attempt == max_attempts - 1:
                        raise e
                    print(f"Attempt {attempt + 1} failed: {e}")
            return None
        return wrapper
    return decorator

# Usage
@timer
@retry(max_attempts=3)
def unreliable_function():
    import random
    if random.random() < 0.7:  # 70% chance of failure
        raise Exception("Random failure")
    return "Success!"

# This will retry up to 3 times and time the execution
result = unreliable_function()
```

## Closures

Functions that "remember" variables from their outer scope:

```python
def create_counter(initial_value=0):
    count = initial_value
    
    def increment(step=1):
        nonlocal count  # Needed to modify outer variable
        count += step
        return count
    
    def decrement(step=1):
        nonlocal count
        count -= step
        return count
    
    def get_count():
        return count
    
    # Return multiple functions
    return increment, decrement, get_count

# Create counters
inc, dec, get = create_counter(10)

print(get())     # 10
print(inc())     # 11
print(inc(5))    # 16
print(dec(3))    # 13
print(get())     # 13
```

## Recursive Functions

Functions that call themselves:

### Basic Recursion
```python
def factorial(n):
    # Base case
    if n <= 1:
        return 1
    # Recursive case
    return n * factorial(n - 1)

print(factorial(5))  # 120 (5 * 4 * 3 * 2 * 1)
```

### Tree Traversal with Recursion
```python
def calculate_directory_size(directory_structure):
    """
    Calculate total size of a directory structure.
    directory_structure is a dict with 'files' (list of sizes) 
    and 'subdirs' (dict of subdirectories)
    """
    total_size = 0
    
    # Add file sizes
    if 'files' in directory_structure:
        total_size += sum(directory_structure['files'])
    
    # Recursively add subdirectory sizes
    if 'subdirs' in directory_structure:
        for subdir in directory_structure['subdirs'].values():
            total_size += calculate_directory_size(subdir)
    
    return total_size

# Example directory structure
directory = {
    'files': [100, 200, 50],  # File sizes in KB
    'subdirs': {
        'documents': {
            'files': [500, 300],
            'subdirs': {
                'images': {'files': [1000, 2000]}
            }
        },
        'downloads': {'files': [750, 250]}
    }
}

total = calculate_directory_size(directory)
print(f"Total directory size: {total} KB")  # 5150 KB
```

## Function Documentation and Type Hints

### Docstrings
```python
def calculate_bmi(weight, height):
    """
    Calculate Body Mass Index (BMI).
    
    Args:
        weight (float): Weight in kilograms
        height (float): Height in meters
    
    Returns:
        float: BMI value
        
    Raises:
        ValueError: If weight or height is not positive
    
    Examples:
        >>> calculate_bmi(70, 1.75)
        22.86
    """
    if weight <= 0 or height <= 0:
        raise ValueError("Weight and height must be positive")
    
    return weight / (height ** 2)
```

### Type Hints
```python
from typing import List, Dict, Optional, Union

def process_grades(
    student_grades: Dict[str, List[float]], 
    min_grade: float = 0.0
) -> Dict[str, float]:
    """
    Calculate average grades for students.
    
    Args:
        student_grades: Dictionary mapping student names to grade lists
        min_grade: Minimum grade to include in calculation
    
    Returns:
        Dictionary mapping student names to average grades
    """
    averages = {}
    for student, grades in student_grades.items():
        valid_grades = [g for g in grades if g >= min_grade]
        if valid_grades:
            averages[student] = sum(valid_grades) / len(valid_grades)
        else:
            averages[student] = 0.0
    return averages

# Usage
grades = {
    "Alice": [85.5, 90.0, 78.5],
    "Bob": [92.0, 88.5, 95.0],
    "Charlie": [45.0, 85.0, 90.0]  # One low grade
}

avg_grades = process_grades(grades, min_grade=50.0)
print(avg_grades)
```

## 🎯 Practice Exercises

1. **Create a decorator** that logs function calls with their arguments and return values.

2. **Write a recursive function** to find all files with a specific extension in a nested directory structure.

3. **Build a function factory** that creates mathematical operation functions (add, multiply, etc.).

4. **Implement a memoization decorator** that caches function results to improve performance.

5. **Create a validation decorator** that checks function arguments meet certain criteria.

## Real-World Example: Data Processing Pipeline

```python
from functools import wraps
from typing import List, Callable, Any
import json

def validate_input(expected_type):
    """Decorator to validate function input types"""
    def decorator(func):
        @wraps(func)
        def wrapper(data, *args, **kwargs):
            if not isinstance(data, expected_type):
                raise TypeError(f"Expected {expected_type}, got {type(data)}")
            return func(data, *args, **kwargs)
        return wrapper
    return decorator

def log_step(step_name):
    """Decorator to log processing steps"""
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            print(f"Starting step: {step_name}")
            result = func(*args, **kwargs)
            print(f"Completed step: {step_name}")
            return result
        return wrapper
    return decorator

class DataPipeline:
    def __init__(self):
        self.steps = []
    
    def add_step(self, func: Callable):
        """Add a processing step to the pipeline"""
        self.steps.append(func)
        return self
    
    def process(self, data: Any) -> Any:
        """Execute all steps in sequence"""
        result = data
        for step in self.steps:
            result = step(result)
        return result

# Processing functions
@log_step("Data Cleaning")
@validate_input(list)
def clean_data(data: List[dict]) -> List[dict]:
    """Remove invalid entries"""
    return [item for item in data if item.get('value') is not None]

@log_step("Data Transformation") 
@validate_input(list)
def transform_data(data: List[dict]) -> List[dict]:
    """Add calculated fields"""
    for item in data:
        item['value_squared'] = item['value'] ** 2
    return data

@log_step("Data Filtering")
@validate_input(list)  
def filter_data(data: List[dict], threshold: float = 50.0) -> List[dict]:
    """Filter data based on threshold"""
    return [item for item in data if item['value'] > threshold]

# Usage
raw_data = [
    {'id': 1, 'value': 45.0},
    {'id': 2, 'value': None},  # Invalid - will be removed
    {'id': 3, 'value': 75.0},
    {'id': 4, 'value': 60.0}
]

# Create and run pipeline
pipeline = (DataPipeline()
    .add_step(clean_data)
    .add_step(transform_data)
    .add_step(lambda data: filter_data(data, threshold=50.0)))

processed_data = pipeline.process(raw_data)
print(f"Final result: {processed_data}")
```

## Key Takeaways

- **Default parameters** make functions more flexible
- ***args** and ****kwargs** allow variable arguments
- **Lambda functions** are useful for short, simple operations
- **Decorators** add functionality without modifying function code
- **Closures** remember variables from outer scope
- **Recursion** is powerful for tree-like structures
- **Type hints** improve code clarity and catch errors
- **Higher-order functions** enable functional programming patterns

Next lesson: We'll explore File Handling and working with external data!