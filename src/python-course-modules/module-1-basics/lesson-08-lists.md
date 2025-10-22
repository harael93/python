# Lesson 8: Lists (Arrays)

## 📋 What is a List?
A list is a collection of items (values) stored in a single variable. Lists are used to store multiple pieces of data together.

## Creating a List
```python
fruits = ["apple", "banana", "cherry"]
```

## Accessing List Items
```python
print(fruits[0])  # apple
print(fruits[1])  # banana
print(fruits[2])  # cherry
```

## List Length
```python
print(len(fruits))  # 3
```

## Looping Through a List
```python
for fruit in fruits:
    print(fruit)
```

## Adding Items
```python
fruits.append("orange")
print(fruits)
```

## Removing Items
```python
fruits.remove("banana")
print(fruits)
```

## Slicing Lists
```python
numbers = [1, 2, 3, 4, 5]
print(numbers[1:4])  # [2, 3, 4]
```

## Practical Examples
- Store a list of favorite movies and print them
- Add user input to a list and display all items
- Count how many items are in a list

## Practice Exercises
- Create a list of 5 colors and print the third one
- Ask the user for 3 favorite foods and store them in a list
- Write a program that reverses a list
- Find the largest and smallest number in a list

## Key Takeaways
- Lists store multiple values in one variable
- Use `append()` to add, `remove()` to delete
- Access items by index, loop through with `for`
- Lists are essential for organizing data in Python

---
**Previous**: [Loops](./lesson-07-loops.md) | **Next**: [Functions](./lesson-09-functions.md)