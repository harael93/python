# Lesson 6: Conditional Statements (if/else)

## 🚦 Making Decisions in Code

Conditional statements let your programs make decisions based on different situations. Think of them like traffic lights that tell your code which path to take.

## Basic `if` Statement

The simplest decision-making structure:

```python
age = 18

if age >= 18:
    print("You can vote!")
```

**Structure:**
- **`if`**: The keyword that starts the condition
- **`age >= 18`**: The condition to test (True or False)
- **`:`**: Colon to end the condition line
- **Indented code**: What happens if condition is True

### Python Uses Indentation!

Unlike other languages that use `{}`, Python uses **indentation** (spaces) to group code:

```python
age = 16

if age >= 18:
    print("You're an adult")      # 4 spaces indentation
    print("You can vote")         # 4 spaces indentation
    print("You have more rights") # 4 spaces indentation

print("This runs regardless")     # No indentation = not part of if
```

---

## 🔄 `if/else` Statements

Handle both "yes" and "no" scenarios:

```python
age = int(input("Enter your age: "))

if age >= 18:
    print("You can vote!")
else:
    print("You're too young to vote")
    print("Wait until you turn 18")
```

---

## 🎯 Comparison Operators

Use these to compare values:

| Operator | Meaning | Example |
|----------|---------|---------|
| `==` | Equal to | `age == 18` |
| `!=` | Not equal to | `name != "admin"` |
| `>` | Greater than | `score > 90` |
| `<` | Less than | `temperature < 32` |
| `>=` | Greater than or equal | `age >= 21` |
| `<=` | Less than or equal | `speed <= 65` |

### Examples:

```python
score = 85

if score >= 90:
    print("Grade: A")
else:
    print("Grade: B or lower")

password = "secret123"

if password == "secret123":
    print("Access granted")
else:
    print("Access denied")
```

---

## 🎭 Multiple Conditions with `elif`

Test multiple conditions in order:

```python
score = int(input("Enter your test score: "))

if score >= 90:
    print("Grade: A - Excellent!")
elif score >= 80:
    print("Grade: B - Good job!")
elif score >= 70:
    print("Grade: C - Passing")
elif score >= 60:
    print("Grade: D - Below average")
else:
    print("Grade: F - Failed")
```

**How it works:**
1. Tests first condition (`score >= 90`)
2. If False, tests second condition (`score >= 80`)
3. If False, tests third condition (`score >= 70`)
4. Continues until one is True or reaches `else`
5. Only ONE block of code runs

---

## 🔗 Logical Operators

Combine multiple conditions:

### `and` - Both conditions must be True

```python
age = 20
has_license = True

if age >= 18 and has_license:
    print("You can drive!")
else:
    print("You cannot drive")
```

### `or` - At least one condition must be True

```python
day = "Saturday"

if day == "Saturday" or day == "Sunday":
    print("It's the weekend!")
else:
    print("It's a weekday")
```

### `not` - Reverses the condition

```python
raining = False

if not raining:
    print("Let's go for a walk!")
else:
    print("Stay inside")
```

---

## 💡 Practical Examples

### Example 1: Login System
```python
username = input("Username: ")
password = input("Password: ")

if username == "admin" and password == "secret123":
    print("Welcome, administrator!")
elif username == "user" and password == "password":
    print("Welcome, user!")
else:
    print("Invalid credentials")
```

### Example 2: Weather Advisory
```python
temperature = float(input("Current temperature (°F): "))
raining = input("Is it raining? (yes/no): ").lower()

if temperature < 32:
    print("It's freezing! Wear a heavy coat.")
elif temperature < 50:
    print("It's cold. Wear a jacket.")
elif temperature < 70:
    print("Perfect weather!")
elif temperature < 85:
    print("It's warm. Wear light clothes.")
else:
    print("It's hot! Stay hydrated.")

if raining == "yes":
    print("Don't forget your umbrella!")
```

### Example 3: Age Category
```python
age = int(input("Enter your age: "))

if age < 13:
    category = "child"
    message = "Enjoy being a kid!"
elif age < 20:
    category = "teenager"
    message = "These are important years!"
elif age < 65:
    category = "adult"
    message = "You're in your prime!"
else:
    category = "senior"
    message = "Wisdom comes with age!"

print(f"You are a {category}. {message}")
```

---

## 📝 Practice Exercises

### Exercise 1: Number Checker
Create a program that:
1. Asks for a number
2. Tells if it's positive, negative, or zero
3. Tells if it's even or odd (use `%` operator)

### Exercise 2: Grade Calculator
Create a program that:
1. Asks for a test score (0-100)
2. Assigns letter grades:
   - A: 90-100
   - B: 80-89
   - C: 70-79
   - D: 60-69
   - F: Below 60

### Exercise 3: Movie Ticket Pricing
Create a program that calculates movie ticket prices:
- Child (under 12): $8
- Student (12-17): $10
- Adult (18-64): $12
- Senior (65+): $9
Ask for age and calculate the price.

### Exercise 4: Password Strength Checker
Create a program that checks if a password is strong:
- At least 8 characters long
- Contains both letters and numbers
- Display "Strong" or "Weak" with reasons

### Exercise 5: BMI Calculator with Categories
Extend the BMI calculator from previous lesson:
- Calculate BMI
- Categorize as: Underweight (<18.5), Normal (18.5-24.9), Overweight (25-29.9), Obese (30+)

---

## 🎮 Interactive Examples

### Number Guessing Game
```python
import random

secret_number = random.randint(1, 10)
guess = int(input("Guess a number between 1 and 10: "))

if guess == secret_number:
    print(f"Correct! The number was {secret_number}")
elif guess < secret_number:
    print(f"Too low! The number was {secret_number}")
else:
    print(f"Too high! The number was {secret_number}")
```

### Simple ATM
```python
balance = 1000
pin = "1234"

entered_pin = input("Enter your PIN: ")

if entered_pin == pin:
    print(f"Access granted. Your balance is ${balance}")
    
    action = input("Withdraw or Check balance? (w/c): ").lower()
    
    if action == "w":
        amount = float(input("Amount to withdraw: $"))
        if amount <= balance:
            balance -= amount
            print(f"Withdrew ${amount}. New balance: ${balance}")
        else:
            print("Insufficient funds!")
    elif action == "c":
        print(f"Your balance is ${balance}")
    else:
        print("Invalid option")
else:
    print("Invalid PIN!")
```

---

## 🚨 Common Mistakes

### 1. Using `=` instead of `==`
```python
# Wrong: Assignment instead of comparison
if age = 18:  # SyntaxError!
    print("You're 18")

# Correct: Comparison
if age == 18:
    print("You're 18")
```

### 2. Forgetting the Colon
```python
# Wrong: Missing colon
if age >= 18
    print("Adult")  # SyntaxError!

# Correct:
if age >= 18:
    print("Adult")
```

### 3. Incorrect Indentation
```python
# Wrong: No indentation
if age >= 18:
print("Adult")  # IndentationError!

# Wrong: Inconsistent indentation
if age >= 18:
    print("You're an adult")
  print("You can vote")  # IndentationError!

# Correct: Consistent 4-space indentation
if age >= 18:
    print("You're an adult")
    print("You can vote")
```

### 4. Comparing Strings and Numbers
```python
# Wrong: Comparing different types
age = input("Age: ")  # This is a string!
if age >= 18:  # Error! Can't compare string to int
    print("Adult")

# Correct: Convert first
age = int(input("Age: "))
if age >= 18:
    print("Adult")
```

---

## 🧠 Advanced Tips

### Nested Conditions
```python
weather = input("How's the weather? (sunny/cloudy/rainy): ")
temperature = int(input("Temperature: "))

if weather == "sunny":
    if temperature > 75:
        print("Perfect beach weather!")
    else:
        print("Sunny but a bit cool")
elif weather == "rainy":
    print("Stay inside with a good book")
else:
    print("Maybe go for a walk")
```

### Chained Comparisons
```python
# Instead of: age >= 13 and age <= 19
if 13 <= age <= 19:
    print("You're a teenager")

# Instead of: score < 0 or score > 100
if not (0 <= score <= 100):
    print("Invalid score")
```

---

## 🎯 Key Takeaways

✅ **`if/elif/else`** lets programs make decisions  
✅ **Indentation matters** - use 4 spaces consistently  
✅ **Comparison operators**: `==`, `!=`, `>`, `<`, `>=`, `<=`  
✅ **Logical operators**: `and`, `or`, `not`  
✅ **Only one condition block executes** in an if/elif/else chain  
✅ **Use `==` for comparison**, not `=` (which is assignment)  

---

## ✅ Lesson Complete!

You now know how to:
- Use if/elif/else statements to make decisions
- Compare values with comparison operators
- Combine conditions with logical operators
- Handle multiple scenarios in your programs
- Avoid common conditional statement mistakes

**Next up:** Learn how to repeat code efficiently with [Loops](./lesson-07-loops.md)!

---

**Previous**: [User Input](./lesson-05-user-input.md) | **Next**: [Loops](./lesson-07-loops.md)