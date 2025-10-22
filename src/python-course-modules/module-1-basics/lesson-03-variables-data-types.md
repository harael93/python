# Lesson 3: Variables & Data Types

## 🏷️ What are Variables?

Variables are like labeled boxes that store information. Instead of remembering specific values, you give them names and use those names in your code.

Think of it like this:
- You have a box labeled "name" that contains "Alice"
- You have a box labeled "age" that contains 25
- When you need the information, you just reference the box name

## Creating Variables

In Python, creating a variable is simple:

```python
name = "Pedro"
age = 25
pi = 3.14159
is_student = True
```

### Variable Rules
1. **Names** can contain letters, numbers, and underscores
2. **Start** with a letter or underscore (not a number)
3. **Case-sensitive**: `name` and `Name` are different
4. **No spaces**: use `first_name` not `first name`

**Good variable names:**
```python
user_name = "Alice"
total_score = 95
is_logged_in = True
PI = 3.14159  # Constants in ALL_CAPS
```

**Bad variable names:**
```python
# These will cause errors:
# 2name = "Bob"      # Can't start with number
# user-name = "Bob"  # Can't use hyphens
# first name = "Bob" # Can't have spaces
```

---

## 📊 Python Data Types

Python automatically determines what type of data you're storing:

### 1. Strings (Text) - `str`
```python
name = "Alice"
message = "Hello, world!"
city = "New York"

# You can use single or double quotes
quote = 'Python is awesome!'
```

### 2. Integers (Whole Numbers) - `int`
```python
age = 25
score = 100
year = 2024
temperature = -5
```

### 3. Floats (Decimal Numbers) - `float`
```python
price = 19.99
pi = 3.14159
temperature = 98.6
percentage = 85.5
```

### 4. Booleans (True/False) - `bool`
```python
is_student = True
is_raining = False
has_permission = True
```

---

## 🖨️ Printing Variables

You can display variables using `print()`:

```python
name = "Pedro"
age = 25
pi = 3.14159
is_student = True

# Print each variable
print(name)        # Pedro
print(age)         # 25
print(pi)          # 3.14159
print(is_student)  # True
```

### Printing with Labels
Make your output more readable:

```python
name = "Pedro"
age = 25

print("Name:", name)        # Name: Pedro
print("Age:", age)          # Age: 25
```

### F-strings (Modern Python)
The most elegant way to combine text and variables:

```python
name = "Pedro"
age = 25
city = "New York"

print(f"Hi, I'm {name}")
print(f"I'm {age} years old")
print(f"I live in {city}")
```

**Output:**
```
Hi, I'm Pedro
I'm 25 years old
I live in New York
```

---

## 📋 Data Type Reference Table

| Type | Example | Description |
|------|---------|-------------|
| `str` | `"Hello"` | Text (string) |
| `int` | `42` | Whole number (integer) |
| `float` | `3.14` | Decimal number |
| `bool` | `True` / `False` | Logical value |

### Checking Data Types
Use the `type()` function to see what type of data you have:

```python
name = "Alice"
age = 30
price = 19.99
is_active = True

print(type(name))      # <class 'str'>
print(type(age))       # <class 'int'>
print(type(price))     # <class 'float'>
print(type(is_active)) # <class 'bool'>
```

---

## 🔄 Changing Variables

Variables can be updated with new values:

```python
score = 0
print(f"Initial score: {score}")  # Initial score: 0

score = 10
print(f"New score: {score}")      # New score: 10

score = score + 5
print(f"Final score: {score}")    # Final score: 15
```

---

## 💡 Practical Examples

### Example 1: Personal Information
```python
# Store personal information
first_name = "Alice"
last_name = "Johnson"
age = 28
height = 5.6  # feet
is_employed = True

# Display the information
print(f"Name: {first_name} {last_name}")
print(f"Age: {age}")
print(f"Height: {height} feet")
print(f"Employed: {is_employed}")
```

### Example 2: Product Information
```python
# Store product details
product_name = "Laptop"
price = 899.99
in_stock = True
quantity = 15

# Display product info
print(f"Product: {product_name}")
print(f"Price: ${price}")
print(f"In Stock: {in_stock}")
print(f"Quantity Available: {quantity}")
```

---

## 📝 Practice Exercises

### Exercise 1: About You
Create variables to store and display:
- Your first name
- Your last name
- Your age
- Your favorite number (decimal)
- Whether you like pizza (True/False)

Display everything with nice labels.

### Exercise 2: Dream Car
Create variables for:
- Car brand
- Model
- Year
- Price
- Is it electric? (True/False)

Print a description like: "My dream car is a 2024 Tesla Model S that costs $89,000. It is electric: True"

### Exercise 3: Recipe Ingredients
Store information about a recipe:
- Recipe name
- Number of servings
- Cooking time (in minutes)
- Difficulty level (1-10)
- Is it vegetarian?

Print a recipe card with all the information.

---

## 🐛 Common Mistakes

### 1. Forgetting Quotes for Strings
```python
# Wrong:
name = Alice  # Error! Python thinks Alice is a variable

# Correct:
name = "Alice"
```

### 2. Using Reserved Words
```python
# Wrong (these are Python keywords):
# print = "Hello"  # Don't use 'print' as variable name
# if = 5           # Don't use 'if' as variable name

# Correct:
message = "Hello"
number = 5
```

### 3. Case Sensitivity
```python
name = "Alice"
print(Name)  # Error! 'Name' doesn't exist, only 'name'
```

---

## 🎯 Key Takeaways

✅ **Variables** store data and make it reusable  
✅ **Python has four main data types**: strings, integers, floats, booleans  
✅ **Variable names** must follow specific rules  
✅ **F-strings** `f"text {variable}"` are the best way to combine text and variables  
✅ **Variables can be changed** after they're created  

---

## ✅ Lesson Complete!

You now understand:
- How to create and use variables
- The four main Python data types
- How to print variables with formatting
- Common variable naming conventions


**other resources**
[variables and data types](https://www.youtube.com/watch?v=LKFrQXaoSMQ): python video if you want visual learning on this topic. 
a bit on [data types](https://www.geeksforgeeks.org/python/python-data-types/): data types in python on geeks for geeks. 
[variables](https://www.geeksforgeeks.org/python/python-variables/) a paper from geeks for geeks on using variables

