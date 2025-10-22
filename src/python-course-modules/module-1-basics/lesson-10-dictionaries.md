# Lesson 10: Dictionaries

## 📖 What is a Dictionary?
A dictionary stores data as key-value pairs. It's like a mini-database for quick lookups.

## Creating a Dictionary
```python
person = {
    "name": "Pedro",
    "age": 25,
    "city": "New York"
}
```

## Accessing Values
```python
print(person["name"])  # Pedro
print(person.get("city"))  # New York
```

## Adding and Removing Keys
```python
person["email"] = "pedro@example.com"
del person["city"]
print(person)
```

## Looping Through a Dictionary
```python
for key, value in person.items():
    print(key, ":", value)
```

## Practical Examples
- Store contact info for friends
- Count word frequency in a sentence
- Map product names to prices

## Practice Exercises
- Create a dictionary for a book (title, author, year)
- Write a program that adds and removes keys
- Loop through a dictionary and print all key-value pairs
- Find a value by key entered by the user

## Key Takeaways
- Dictionaries store key-value pairs for fast lookup
- Use `person[key]` or `person.get(key)` to access values
- Add, remove, and loop through keys easily
- Dictionaries are powerful for organizing structured data

---
**Previous**: [Functions](./lesson-09-functions.md) | **Next**: [Practice Exercises](./lesson-11-practice-exercises.md)