# Lesson 7: Loops (for/while)

## 🔁 Why Use Loops?
Loops let you repeat actions in your code without writing the same lines over and over. They're essential for tasks like processing lists, running calculations, or automating repetitive work.

## The `for` Loop

Use `for` to repeat actions a set number of times or to go through items in a list:

```python
for i in range(5):
    print("Loop:", i)
```

**Output:**
```
Loop: 0
Loop: 1
Loop: 2
Loop: 3
Loop: 4
```

### Looping Through Lists
```python
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)
```

## The `while` Loop

Repeats as long as a condition is True:

```python
count = 0
while count < 5:
    print("Counting:", count)
    count += 1
```

**Output:**
```
Counting: 0
Counting: 1
Counting: 2
Counting: 3
Counting: 4
```

## Breaking Out of Loops
Use `break` to stop a loop early:
```python
for i in range(10):
    if i == 5:
        break
    print(i)
```

## Skipping Iterations
Use `continue` to skip to the next loop cycle:
```python
for i in range(5):
    if i == 2:
        continue
    print(i)
```

## Practical Examples
### Example 1: Print Even Numbers
```python
for i in range(10):
    if i % 2 == 0:
        print(i)
```
### Example 2: Sum Numbers in a List
```python
numbers = [2, 4, 6, 8, 10]
total = 0
for n in numbers:
    total += n
print("The sum is:", total)
```
### Example 3: User Input Loop
```python
shopping_list = []
for i in range(3):
    item = input("Add an item: ")
    shopping_list.append(item)
print("Your shopping list:", shopping_list)
```

## Practice Exercises
- Print all odd numbers from 1 to 20
- Ask the user for 5 names and print them in reverse order
- Write a loop that keeps asking for a password until the user types "python"
- Calculate the factorial of a number entered by the user

## Key Takeaways
- `for` loops repeat a set number of times or over items
- `while` loops repeat as long as a condition is true
- Use `break` to exit a loop early, `continue` to skip an iteration
- Loops are essential for working with lists and user input

---
**Previous**: [Conditional Statements](./lesson-06-conditionals.md) | **Next**: [Lists (Arrays)](./lesson-08-lists.md)