# Lesson 5: User Input

## 💬 Getting Input from Users

So far, our programs have used fixed values. Now let's make them interactive by getting input from users!

## The `input()` Function

The `input()` function pauses your program and waits for the user to type something:

```python
name = input("What's your name? ")
print(f"Nice to meet you, {name}!")
```

**When you run this:**
```
What's your name? Alice
Nice to meet you, Alice!
```

### Important: `input()` Always Returns a String

No matter what the user types, `input()` always gives you text (a string):

```python
age = input("How old are you? ")
print(f"You typed: {age}")
print(f"Type of age: {type(age)}")  # <class 'str'>
```

**Output:**
```
How old are you? 25
You typed: 25
Type of age: <class 'str'>
```

---

## 🔄 Converting Input to Numbers

Since `input()` returns strings, you need to convert them to numbers for math:

### Converting to Integer

```python
age_str = input("How old are you? ")
age = int(age_str)  # Convert string to integer

print(f"Next year you'll be {age + 1}")
```

**Shorter version:**
```python
age = int(input("How old are you? "))
print(f"Next year you'll be {age + 1}")
```

### Converting to Float

```python
height = float(input("How tall are you in feet? "))
height_cm = height * 30.48  # Convert to centimeters

print(f"You are {height_cm:.1f} cm tall")
```

---

## 💡 Practical Examples

### Example 1: Simple Calculator
```python
# Get two numbers from user
num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))

# Perform calculations
addition = num1 + num2
subtraction = num1 - num2
multiplication = num1 * num2
division = num1 / num2

# Display results
print(f"\nResults:")
print(f"{num1} + {num2} = {addition}")
print(f"{num1} - {num2} = {subtraction}")
print(f"{num1} * {num2} = {multiplication}")
print(f"{num1} / {num2} = {division}")
```

### Example 2: Personal Information
```python
# Collect personal information
first_name = input("First name: ")
last_name = input("Last name: ")
age = int(input("Age: "))
city = input("City: ")

# Display formatted information
print(f"\n--- Personal Information ---")
print(f"Name: {first_name} {last_name}")
print(f"Age: {age}")
print(f"Location: {city}")
print(f"Birth year: {2024 - age}")
```

### Example 3: Restaurant Order
```python
# Take food order
print("Welcome to Python Pizza!")
customer_name = input("Your name: ")
pizza_size = input("Pizza size (small/medium/large): ")
quantity = int(input("How many pizzas? "))

# Simple pricing
if pizza_size == "small":
    price_each = 12.99
elif pizza_size == "medium":
    price_each = 15.99
else:  # large
    price_each = 18.99

total = price_each * quantity

print(f"\n--- Order Summary ---")
print(f"Customer: {customer_name}")
print(f"{quantity} {pizza_size} pizza(s)")
print(f"Total: ${total:.2f}")
```

---

## 🎮 Interactive Programs

### Example 4: Number Guessing Setup
```python
print("I'm thinking of a number between 1 and 10...")
secret_number = 7  # We'll make this random later

guess = int(input("What's your guess? "))

if guess == secret_number:
    print("Correct! You win!")
elif guess < secret_number:
    print("Too low!")
else:
    print("Too high!")

print(f"The number was {secret_number}")
```

### Example 5: Mad Libs
```python
print("Let's create a silly story!")

noun1 = input("Enter a noun: ")
verb = input("Enter a verb: ")
adjective = input("Enter an adjective: ")
noun2 = input("Enter another noun: ")
color = input("Enter a color: ")

story = f"""
Once upon a time, there was a {adjective} {noun1} 
who loved to {verb} with a {color} {noun2}. 
It was the most {adjective} day ever!
"""

print("\nHere's your story:")
print(story)
```

---

## 📝 Practice Exercises

### Exercise 1: Area Calculator
Create a program that:
1. Asks for the length and width of a rectangle
2. Calculates the area
3. Displays the result with a nice message

### Exercise 2: Temperature Converter
Create a program that:
1. Asks for a temperature in Celsius
2. Converts it to Fahrenheit
3. Displays both temperatures

**Formula**: F = (C × 9/5) + 32

### Exercise 3: Age in Days
Create a program that:
1. Asks for someone's age in years
2. Calculates their age in days (use 365 days per year)
3. Displays the result

### Exercise 4: Shopping Calculator
Create a program that:
1. Asks for the price of an item
2. Asks for the quantity
3. Asks for the tax rate (as a percentage)
4. Calculates subtotal, tax amount, and total
5. Displays a receipt

### Exercise 5: BMI Calculator
Create a program that:
1. Asks for weight in pounds
2. Asks for height in inches
3. Calculates BMI using: BMI = (weight × 703) / (height²)
4. Displays the BMI

---

## 🛡️ Handling Input Errors

Sometimes users don't enter what you expect. Here's a preview of error handling:

```python
try:
    age = int(input("How old are you? "))
    print(f"You are {age} years old")
except ValueError:
    print("That's not a valid number!")
```

**Note**: We'll learn more about error handling in later modules.

---

## 🎯 Input Formatting Tips

### 1. Clear Prompts
```python
# Good: Clear and specific
age = int(input("Enter your age (numbers only): "))

# Less clear
age = int(input("Age? "))
```

### 2. Provide Examples
```python
email = input("Email address (example: user@email.com): ")
phone = input("Phone number (format: 123-456-7890): ")
```

### 3. Add Spaces for Readability
```python
# Good: Space after the question mark
name = input("What's your name? ")

# Less readable
name = input("What's your name?")
```

---

## 🔗 Combining Input with Previous Concepts

### Multiple Inputs for Calculations
```python
print("Rectangle Calculator")
print("-" * 20)

length = float(input("Length: "))
width = float(input("Width: "))

area = length * width
perimeter = 2 * (length + width)

print(f"\nResults:")
print(f"Area: {area:.2f}")
print(f"Perimeter: {perimeter:.2f}")
```

### User-Driven Stories
```python
print("Tell me about yourself:")

name = input("Name: ")
age = int(input("Age: "))
hobby = input("Favorite hobby: ")
food = input("Favorite food: ")

print(f"\nHere's what I learned about {name}:")
print(f"- {age} years old")
print(f"- Loves {hobby}")
print(f"- Favorite food is {food}")

if age >= 18:
    print("- You're an adult!")
else:
    print("- You're still young!")
```

---

## 🐛 Common Mistakes

### 1. Forgetting to Convert Types
```python
# Wrong: Trying to do math with strings
age = input("Age: ")
next_year = age + 1  # Error! Can't add int to str

# Correct:
age = int(input("Age: "))
next_year = age + 1
```

### 2. Not Handling Decimal Numbers
```python
# Wrong: Using int() when user might enter decimals
height = int(input("Height in feet: "))  # Error if user enters 5.5

# Correct:
height = float(input("Height in feet: "))
```

### 3. Poor User Experience
```python
# Poor: Unclear prompts
x = input("Enter number: ")

# Better: Clear and helpful
price = float(input("Enter the price in dollars (e.g., 19.99): "))
```

---

## 🎯 Key Takeaways

✅ **`input()` always returns a string**, even if user types numbers  
✅ **Convert to numbers** using `int()` or `float()` for calculations  
✅ **Provide clear prompts** to help users know what to enter  
✅ **Combine input with variables and math** to create interactive programs  
✅ **Plan for user errors** (we'll learn more about this later)  

---

## ✅ Lesson Complete!

You now know how to:
- Get input from users with `input()`
- Convert string input to numbers
- Create interactive programs
- Combine user input with calculations
- Write clear, user-friendly prompts

**Next up:** Learn how to make decisions in your programs with [Conditional Statements](./lesson-06-conditionals.md)!

---

**Previous**: [Basic Math Operations](./lesson-04-basic-math.md) | **Next**: [Conditional Statements](./lesson-06-conditionals.md)