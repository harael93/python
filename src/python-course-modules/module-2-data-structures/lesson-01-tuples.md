# Lesson 1: Tuples

## 🎯 What are Tuples?

Tuples are ordered collections in Python that are **immutable** (cannot be changed after creation). They're similar to lists but with one key difference: once you create a tuple, you can't modify it.

## Creating Tuples

### Basic Syntax
```python
# Empty tuple
empty_tuple = ()

# Tuple with values
colors = ("red", "green", "blue")
numbers = (1, 2, 3, 4, 5)

# Single item tuple (note the comma!)
single_item = ("hello",)  # Without comma, it's just a string in parentheses
```

### Multiple Ways to Create Tuples
```python
# With parentheses (recommended)
coordinates = (10, 20)

# Without parentheses (works but less clear)
point = 10, 20

# Using tuple() constructor
from_list = tuple([1, 2, 3, 4])
from_string = tuple("hello")  # ('h', 'e', 'l', 'l', 'o')
```

## Accessing Tuple Elements

### Indexing
```python
fruits = ("apple", "banana", "cherry", "date")

# Access by index (starts at 0)
first_fruit = fruits[0]    # "apple"
last_fruit = fruits[-1]    # "date"

print(f"First: {first_fruit}")
print(f"Last: {last_fruit}")
```

### Slicing
```python
numbers = (0, 1, 2, 3, 4, 5, 6, 7, 8, 9)

# Get a slice
first_three = numbers[:3]      # (0, 1, 2)
middle = numbers[3:7]          # (3, 4, 5, 6)
last_three = numbers[-3:]      # (7, 8, 9)
every_second = numbers[::2]    # (0, 2, 4, 6, 8)

print(f"First three: {first_three}")
print(f"Middle: {middle}")
```

## Tuple Methods

Tuples have only two built-in methods:

### count() - Count occurrences
```python
numbers = (1, 2, 3, 2, 4, 2, 5)

count_of_twos = numbers.count(2)  # Returns 3
print(f"Number of 2s: {count_of_twos}")
```

### index() - Find position
```python
colors = ("red", "green", "blue", "yellow")

blue_position = colors.index("blue")  # Returns 2
print(f"Blue is at position: {blue_position}")
```

## Tuple Unpacking

One of the most powerful features of tuples is unpacking:

```python
# Basic unpacking
person = ("Alice", 25, "Engineer")
name, age, job = person

print(f"Name: {name}")
print(f"Age: {age}")
print(f"Job: {job}")

# Swapping variables
a = 10
b = 20
a, b = b, a  # Now a=20, b=10

# Multiple assignment
coordinates = (100, 200)
x, y = coordinates
```

## When to Use Tuples

### 1. **Coordinates and Points**
```python
# 2D point
point = (10, 20)

# 3D point
position = (10, 20, 30)

# RGB color
red = (255, 0, 0)
```

### 2. **Database Records**
```python
# Student record
student = ("John Doe", 20, "Computer Science", 3.8)
name, age, major, gpa = student
```

### 3. **Function Return Values**
```python
def get_name_age():
    return "Alice", 25

name, age = get_name_age()
```

### 4. **Dictionary Keys**
```python
# Tuples can be dictionary keys (lists cannot!)
locations = {
    (0, 0): "Origin",
    (10, 20): "Point A", 
    (30, 40): "Point B"
}
```

## Tuples vs Lists

| Feature | Tuples | Lists |
|---------|--------|--------|
| **Mutability** | Immutable | Mutable |
| **Syntax** | `(1, 2, 3)` | `[1, 2, 3]` |
| **Performance** | Faster | Slightly slower |
| **Use as dict key** | ✅ Yes | ❌ No |
| **Methods** | 2 methods | Many methods |

## Practical Examples

### Example 1: Student Information System
```python
# Store student data as tuples
students = [
    ("Alice", 20, "Computer Science", 3.8),
    ("Bob", 19, "Mathematics", 3.6),
    ("Charlie", 21, "Physics", 3.9)
]

# Process student data
for student in students:
    name, age, major, gpa = student
    if gpa >= 3.7:
        print(f"{name} is on the Dean's List!")
```

### Example 2: Menu System
```python
menu_items = (
    ("Burger", 8.99),
    ("Pizza", 12.50),
    ("Salad", 6.75),
    ("Pasta", 9.25)
)

print("Menu:")
for item, price in menu_items:
    print(f"{item}: ${price}")
```

### Example 3: Game Coordinates
```python
# Player position
player_pos = (50, 100)

# Enemy positions
enemies = [
    (10, 20),
    (80, 60),
    (120, 90)
]

# Check if player is near any enemy
px, py = player_pos
for enemy_pos in enemies:
    ex, ey = enemy_pos
    distance = ((px - ex) ** 2 + (py - ey) ** 2) ** 0.5
    if distance < 20:
        print(f"Enemy nearby at {enemy_pos}!")
```

## 🎯 Practice Exercises

1. **Create a tuple** containing your favorite movies and print the second movie.

2. **Write a function** that takes a tuple of numbers and returns the sum and average as a tuple.

3. **Create a simple grade book** using tuples to store student names and grades, then calculate the class average.

4. **Use tuple unpacking** to swap three variables in a single line.

## Key Takeaways

- Tuples are **immutable** ordered collections
- Use parentheses `()` to create tuples
- Great for **fixed data** that shouldn't change
- Perfect for **coordinates, database records, and function returns**
- Can be **unpacked** for easy variable assignment
- More **memory efficient** than lists
- Can be used as **dictionary keys**

Next lesson: We'll explore Sets and their unique properties!