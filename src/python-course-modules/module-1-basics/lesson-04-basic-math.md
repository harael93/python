# Lesson 4: Basic Math Operations

## 🧮 Python as a Calculator

Python can perform all basic mathematical operations. Let's explore how to do calculations with numbers!

## Basic Math Operators

### The Essential Operations

```python
a = 10
b = 3

print(a + b)    # Addition: 13
print(a - b)    # Subtraction: 7
print(a * b)    # Multiplication: 30
print(a / b)    # Division (float): 3.3333333333333335
print(a // b)   # Division (integer): 3
print(a % b)    # Modulo (remainder): 1
print(a ** b)   # Power (10^3): 1000
```

### Operator Reference

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| `+` | Addition | `5 + 3` | `8` |
| `-` | Subtraction | `5 - 3` | `2` |
| `*` | Multiplication | `5 * 3` | `15` |
| `/` | Division (float) | `5 / 3` | `1.6666...` |
| `//` | Division (integer) | `5 // 3` | `1` |
| `%` | Modulo (remainder) | `5 % 3` | `2` |
| `**` | Exponent (power) | `5 ** 3` | `125` |

---

## 🔢 Working with Different Number Types

### Integers vs. Floats

```python
# Integers (whole numbers)
x = 10
y = 3

# Float division always returns a float
result1 = x / y
print(f"{x} / {y} = {result1}")  # 10 / 3 = 3.3333333333333335

# Integer division returns an integer
result2 = x // y
print(f"{x} // {y} = {result2}")  # 10 // 3 = 3

# Working with floats
price = 19.99
tax_rate = 0.08
total = price + (price * tax_rate)
print(f"Total: ${total}")  # Total: $21.5892
```

### Mixing Integers and Floats

```python
# When you mix int and float, result is always float
x = 10      # integer
y = 3.0     # float

print(x + y)    # 13.0 (float)
print(x * y)    # 30.0 (float)
print(type(x + y))  # <class 'float'>
```

---

## 📈 Order of Operations (PEMDAS)

Python follows mathematical order of operations:

1. **P**arentheses
2. **E**xponents
3. **M**ultiplication & **D**ivision (left to right)
4. **A**ddition & **S**ubtraction (left to right)

```python
# Without parentheses
result1 = 2 + 3 * 4
print(result1)  # 14 (not 20!)

# With parentheses
result2 = (2 + 3) * 4
print(result2)  # 20

# Complex expression
result3 = 2 ** 3 + 4 * 5 - 1
print(result3)  # 8 + 20 - 1 = 27

# Using parentheses for clarity
result4 = (2 ** 3) + (4 * 5) - 1
print(result4)  # Same result, but clearer: 27
```

---

## ⚡ Shorthand Assignment Operators

Instead of writing `x = x + 5`, you can use shorthand:

```python
x = 10

x += 5    # Same as: x = x + 5
print(x)  # 15

x -= 3    # Same as: x = x - 3
print(x)  # 12

x *= 2    # Same as: x = x * 2
print(x)  # 24

x /= 4    # Same as: x = x / 4
print(x)  # 6.0

x //= 2   # Same as: x = x // 2
print(x)  # 3.0

x %= 2    # Same as: x = x % 2
print(x)  # 1.0

x **= 3   # Same as: x = x ** 3
print(x)  # 1.0
```

---

## 🎯 Practical Examples

### Example 1: Calculator
```python
# Simple calculator
num1 = 15
num2 = 4

print(f"Numbers: {num1} and {num2}")
print(f"Addition: {num1} + {num2} = {num1 + num2}")
print(f"Subtraction: {num1} - {num2} = {num1 - num2}")
print(f"Multiplication: {num1} * {num2} = {num1 * num2}")
print(f"Division: {num1} / {num2} = {num1 / num2}")
print(f"Integer Division: {num1} // {num2} = {num1 // num2}")
print(f"Remainder: {num1} % {num2} = {num1 % num2}")
print(f"Power: {num1} ** {num2} = {num1 ** num2}")
```

### Example 2: Shopping Cart
```python
# Shopping cart calculation
item1_price = 12.99
item2_price = 8.50
item3_price = 15.75

subtotal = item1_price + item2_price + item3_price
tax_rate = 0.08  # 8% tax
tax_amount = subtotal * tax_rate
total = subtotal + tax_amount

print(f"Subtotal: ${subtotal}")
print(f"Tax (8%): ${tax_amount:.2f}")  # .2f rounds to 2 decimal places
print(f"Total: ${total:.2f}")
```

### Example 3: Temperature Conversion
```python
# Convert Celsius to Fahrenheit
celsius = 25
fahrenheit = (celsius * 9/5) + 32

print(f"{celsius}°C = {fahrenheit}°F")

# Convert Fahrenheit to Celsius
fahrenheit = 77
celsius = (fahrenheit - 32) * 5/9

print(f"{fahrenheit}°F = {celsius:.1f}°C")  # .1f rounds to 1 decimal place
```

### Example 4: Circle Calculations
```python
# Circle area and circumference
pi = 3.14159
radius = 5

area = pi * radius ** 2
circumference = 2 * pi * radius

print(f"Circle with radius {radius}:")
print(f"Area: {area:.2f}")
print(f"Circumference: {circumference:.2f}")
```

---

## 📝 Practice Exercises

### Exercise 1: Age Calculator
Calculate how many days old you are:
```python
# Your age in years
age_years = 25

# Calculate days (assume 365 days per year)
age_days = age_years * 365

print(f"You are approximately {age_days} days old!")
```

### Exercise 2: Tip Calculator
Create a program that calculates the tip and total for a restaurant bill:
- Bill amount: $45.67
- Tip percentage: 18%
- Calculate tip amount and total

### Exercise 3: Rectangle Area and Perimeter
Given a rectangle with:
- Length: 12.5
- Width: 8.3
Calculate and display the area and perimeter.

### Exercise 4: Compound Interest
Calculate compound interest with:
- Principal: $1000
- Interest rate: 5% (0.05)
- Time: 3 years
- Formula: Final Amount = Principal × (1 + rate)^time

### Exercise 5: Pizza Party
You're ordering pizza for a party:
- Number of people: 12
- Slices per person: 3
- Slices per pizza: 8
Calculate how many pizzas you need to order.

---

## 🧠 Understanding Modulo (%)

The modulo operator `%` gives you the remainder after division:

```python
print(10 % 3)   # 1 (10 ÷ 3 = 3 remainder 1)
print(15 % 4)   # 3 (15 ÷ 4 = 3 remainder 3)
print(20 % 5)   # 0 (20 ÷ 5 = 4 remainder 0)
```

**Common uses:**
- **Check if number is even**: `number % 2 == 0`
- **Check if number is odd**: `number % 2 == 1`
- **Wrap around values**: useful for cycles and rotations

---

## 🔢 Working with Rounding

Python provides ways to round numbers:

```python
import math

number = 3.7865

# Round to nearest integer
print(round(number))        # 4

# Round to specific decimal places
print(round(number, 2))     # 3.79

# Other rounding functions
print(math.floor(number))   # 3 (round down)
print(math.ceil(number))    # 4 (round up)
```

---

## 🐛 Common Mistakes

### 1. Division by Zero
```python
# This will cause an error:
# result = 10 / 0  # ZeroDivisionError

# Always check first:
denominator = 0
if denominator != 0:
    result = 10 / denominator
else:
    print("Cannot divide by zero!")
```

### 2. Integer vs. Float Division
```python
# Be aware of the difference:
print(7 / 2)    # 3.5 (float division)
print(7 // 2)   # 3 (integer division)
```

### 3. Operator Precedence
```python
# This might not do what you expect:
result = 2 + 3 * 4  # 14, not 20

# Use parentheses for clarity:
result = (2 + 3) * 4  # 20
```

---

## 🎯 Key Takeaways

✅ **Python supports all basic math operations**: +, -, *, /, //, %, **  
✅ **Order of operations matters**: Use parentheses for clarity  
✅ **Shorthand operators**: +=, -=, *=, /= save typing  
✅ **Mixing int and float** results in float  
✅ **Modulo (%)** gives remainder after division  
✅ **Integer division (//)** vs **float division (/)**  

---

## ✅ Lesson Complete!

You now know how to:
- Perform all basic mathematical operations in Python
- Use shorthand assignment operators
- Understand operator precedence
- Work with both integers and floats
- Apply math to solve real-world problems

