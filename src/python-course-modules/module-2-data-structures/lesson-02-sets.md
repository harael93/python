# Lesson 2: Sets

## 🎯 What are Sets?

Sets are collections of **unique elements** in Python. They automatically remove duplicates and are perfect when you need to work with distinct values. Sets are **unordered** and **mutable**.

## Creating Sets

### Basic Syntax
```python
# Empty set (must use set(), not {})
empty_set = set()

# Set with values
fruits = {"apple", "banana", "cherry"}
numbers = {1, 2, 3, 4, 5}

# From other iterables
from_list = set([1, 2, 2, 3, 3, 4])  # {1, 2, 3, 4} - duplicates removed
from_string = set("hello")            # {'h', 'e', 'l', 'o'} - duplicates removed
```

### Automatic Duplicate Removal
```python
# Duplicates are automatically removed
colors = {"red", "blue", "red", "green", "blue"}
print(colors)  # {'red', 'blue', 'green'}

# Converting list to set removes duplicates
numbers_list = [1, 2, 2, 3, 3, 4, 4, 5]
unique_numbers = set(numbers_list)
print(unique_numbers)  # {1, 2, 3, 4, 5}
```

## Set Operations

### Adding Elements
```python
fruits = {"apple", "banana"}

# Add single element
fruits.add("cherry")
print(fruits)  # {'apple', 'banana', 'cherry'}

# Add multiple elements
fruits.update(["orange", "grape"])
print(fruits)  # {'apple', 'banana', 'cherry', 'orange', 'grape'}
```

### Removing Elements
```python
colors = {"red", "blue", "green", "yellow"}

# remove() - raises error if element doesn't exist
colors.remove("blue")

# discard() - doesn't raise error if element doesn't exist
colors.discard("purple")  # Safe even if "purple" isn't in the set

# pop() - removes and returns arbitrary element
removed_color = colors.pop()

# clear() - removes all elements
colors.clear()
```

## Set Mathematical Operations

Sets support mathematical set operations:

### Union (|) - All unique elements from both sets
```python
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}

# Using | operator
union_result = set1 | set2
print(union_result)  # {1, 2, 3, 4, 5, 6}

# Using union() method
union_result = set1.union(set2)
print(union_result)  # {1, 2, 3, 4, 5, 6}
```

### Intersection (&) - Common elements
```python
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}

# Using & operator
intersection_result = set1 & set2
print(intersection_result)  # {3, 4}

# Using intersection() method
intersection_result = set1.intersection(set2)
print(intersection_result)  # {3, 4}
```

### Difference (-) - Elements in first set but not second
```python
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}

# Elements in set1 but not in set2
difference_result = set1 - set2
print(difference_result)  # {1, 2}

# Using difference() method
difference_result = set1.difference(set2)
print(difference_result)  # {1, 2}
```

### Symmetric Difference (^) - Elements in either set, but not both
```python
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}

# Using ^ operator
sym_diff_result = set1 ^ set2
print(sym_diff_result)  # {1, 2, 5, 6}

# Using symmetric_difference() method
sym_diff_result = set1.symmetric_difference(set2)
print(sym_diff_result)  # {1, 2, 5, 6}
```

## Set Comparison Operations

### Subset and Superset
```python
set1 = {1, 2}
set2 = {1, 2, 3, 4}

# Check if set1 is subset of set2
is_subset = set1.issubset(set2)  # True
print(f"set1 is subset of set2: {is_subset}")

# Check if set2 is superset of set1
is_superset = set2.issuperset(set1)  # True
print(f"set2 is superset of set1: {is_superset}")

# Check if sets are disjoint (no common elements)
set3 = {5, 6, 7}
are_disjoint = set1.isdisjoint(set3)  # True
print(f"set1 and set3 are disjoint: {are_disjoint}")
```

## Practical Applications

### Example 1: Finding Unique Words
```python
text = "the quick brown fox jumps over the lazy dog the fox is quick"
words = text.split()
unique_words = set(words)

print(f"Total words: {len(words)}")
print(f"Unique words: {len(unique_words)}")
print(f"Unique words list: {sorted(unique_words)}")
```

### Example 2: User Permissions System
```python
# Define user roles and permissions
admin_permissions = {"read", "write", "delete", "admin"}
editor_permissions = {"read", "write", "edit"}
viewer_permissions = {"read"}

# Check user access
def check_access(user_permissions, required_permission):
    return required_permission in user_permissions

# User trying to delete
user_role = editor_permissions
can_delete = check_access(user_role, "delete")
print(f"Can delete: {can_delete}")  # False

# Find common permissions between roles
common_perms = admin_permissions & editor_permissions
print(f"Common permissions: {common_perms}")  # {'read', 'write'}
```

### Example 3: Survey Analysis
```python
# Survey responses
survey1_participants = {"Alice", "Bob", "Charlie", "David"}
survey2_participants = {"Bob", "David", "Eve", "Frank"}

# Who participated in both surveys?
both_surveys = survey1_participants & survey2_participants
print(f"Participated in both: {both_surveys}")

# Who participated in only survey 1?
only_survey1 = survey1_participants - survey2_participants
print(f"Only survey 1: {only_survey1}")

# Total unique participants
all_participants = survey1_participants | survey2_participants
print(f"All participants: {all_participants}")
```

### Example 4: Inventory Management
```python
# Store inventory
store_a_items = {"laptop", "mouse", "keyboard", "monitor", "headphones"}
store_b_items = {"mouse", "keyboard", "tablet", "phone", "headphones"}

# Items available in both stores
common_items = store_a_items & store_b_items
print(f"Available in both stores: {common_items}")

# Items unique to each store
unique_to_a = store_a_items - store_b_items
unique_to_b = store_b_items - store_a_items
print(f"Unique to Store A: {unique_to_a}")
print(f"Unique to Store B: {unique_to_b}")

# All available items
all_items = store_a_items | store_b_items
print(f"All available items: {all_items}")
```

## Set Comprehensions

Create sets using comprehensions:

```python
# Square numbers from 1 to 10
squares = {x**2 for x in range(1, 11)}
print(squares)  # {1, 4, 9, 16, 25, 36, 49, 64, 81, 100}

# Unique vowels from a string
text = "Hello World"
vowels = {char.lower() for char in text if char.lower() in 'aeiou'}
print(vowels)  # {'e', 'o'}

# Even numbers
evens = {x for x in range(20) if x % 2 == 0}
print(evens)  # {0, 2, 4, 6, 8, 10, 12, 14, 16, 18}
```

## Frozen Sets

Immutable version of sets:

```python
# Create frozen set
frozen_fruits = frozenset(["apple", "banana", "cherry"])

# Can be used as dictionary keys
inventory = {
    frozenset(["apple", "banana"]): "Fruit Mix A",
    frozenset(["cherry", "grape"]): "Fruit Mix B"
}

print(inventory[frozenset(["apple", "banana"])])  # "Fruit Mix A"
```

## 🎯 Practice Exercises

1. **Remove duplicates** from a list of numbers using sets.

2. **Create a function** that finds common friends between two people (represented as sets).

3. **Build a simple spell checker** that finds misspelled words by comparing against a dictionary set.

4. **Analyze website visitors** using sets to find unique visitors, returning visitors, etc.

## Key Takeaways

- Sets contain **unique elements** only
- Sets are **unordered** and **mutable**
- Perfect for **removing duplicates** and **membership testing**
- Support mathematical operations: **union, intersection, difference**
- Fast **O(1) lookup** time for membership testing
- Cannot contain **mutable elements** (like lists or dictionaries)
- Use **frozenset** for immutable sets

Next lesson: We'll revisit Dictionaries with advanced techniques!