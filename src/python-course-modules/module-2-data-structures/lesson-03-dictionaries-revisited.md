# Lesson 3: Dictionaries (Revisited)

## 🎯 Advanced Dictionary Techniques

We covered basic dictionaries in Module 1. Now let's explore advanced features and techniques that make dictionaries incredibly powerful for real-world applications.

## Dictionary Comprehensions

Create dictionaries using comprehensions for cleaner, more readable code:

### Basic Dictionary Comprehension
```python
# Create squares dictionary
squares = {x: x**2 for x in range(1, 6)}
print(squares)  # {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

# Convert list to dictionary with indices
fruits = ["apple", "banana", "cherry"]
fruit_indices = {fruit: index for index, fruit in enumerate(fruits)}
print(fruit_indices)  # {'apple': 0, 'banana': 1, 'cherry': 2}
```

### Conditional Dictionary Comprehension
```python
# Only include even numbers
even_squares = {x: x**2 for x in range(1, 11) if x % 2 == 0}
print(even_squares)  # {2: 4, 4: 16, 6: 36, 8: 64, 10: 100}

# Filter and transform data
students = ["Alice", "Bob", "Charlie", "David"]
student_grades = {name: len(name) * 10 for name in students if len(name) > 3}
print(student_grades)  # {'Alice': 50, 'Charlie': 70, 'David': 50}
```

## Advanced Dictionary Methods

### get() with Default Values
```python
student_grades = {"Alice": 85, "Bob": 92, "Charlie": 78}

# Safe way to get values
alice_grade = student_grades.get("Alice", 0)  # 85
diana_grade = student_grades.get("Diana", 0)  # 0 (default)

print(f"Alice: {alice_grade}, Diana: {diana_grade}")
```

### setdefault() - Get or Set Default
```python
inventory = {"apples": 50, "bananas": 30}

# Get value or set default if key doesn't exist
orange_count = inventory.setdefault("oranges", 0)  # Sets oranges to 0
apple_count = inventory.setdefault("apples", 0)    # Returns existing value (50)

print(inventory)  # {'apples': 50, 'bananas': 30, 'oranges': 0}
```

### update() - Merge Dictionaries
```python
base_config = {"debug": True, "timeout": 30}
user_config = {"timeout": 60, "retries": 3}

# Update base with user settings
base_config.update(user_config)
print(base_config)  # {'debug': True, 'timeout': 60, 'retries': 3}

# Python 3.9+ merge operator
combined = base_config | user_config
```

## Nested Dictionaries

Working with dictionaries containing other dictionaries:

### Student Database Example
```python
students = {
    "S001": {
        "name": "Alice Johnson",
        "age": 20,
        "grades": {"Math": 85, "Science": 92, "English": 78},
        "contact": {"email": "alice@email.com", "phone": "555-1234"}
    },
    "S002": {
        "name": "Bob Smith", 
        "age": 19,
        "grades": {"Math": 76, "Science": 88, "English": 82},
        "contact": {"email": "bob@email.com", "phone": "555-5678"}
    }
}

# Access nested data
alice_math_grade = students["S001"]["grades"]["Math"]
print(f"Alice's Math grade: {alice_math_grade}")

# Add new grade
students["S001"]["grades"]["History"] = 90

# Calculate average grade
def calculate_average(student_id):
    grades = students[student_id]["grades"]
    return sum(grades.values()) / len(grades)

alice_avg = calculate_average("S001")
print(f"Alice's average: {alice_avg:.1f}")
```

## Dictionary as Counter/Frequency Counter

### Manual Counting
```python
text = "hello world hello python world"
word_count = {}

for word in text.split():
    word_count[word] = word_count.get(word, 0) + 1

print(word_count)  # {'hello': 2, 'world': 2, 'python': 1}
```

### Using Collections.Counter
```python
from collections import Counter

# Automatic counting
text = "hello world hello python world"
word_count = Counter(text.split())
print(word_count)  # Counter({'hello': 2, 'world': 2, 'python': 1})

# Most common elements
most_common = word_count.most_common(2)  # [('hello', 2), ('world', 2)]
print(f"Most common words: {most_common}")
```

## DefaultDict - Automatic Default Values

```python
from collections import defaultdict

# Regular dict requires checking if key exists
regular_groups = {}
for name in ["Alice", "Bob", "Alice", "Charlie", "Bob"]:
    if name not in regular_groups:
        regular_groups[name] = []
    regular_groups[name].append(len(name))

# DefaultDict automatically creates missing keys
groups = defaultdict(list)
for name in ["Alice", "Bob", "Alice", "Charlie", "Bob"]:
    groups[name].append(len(name))

print(dict(groups))  # {'Alice': [5, 5], 'Bob': [3, 3], 'Charlie': [7]}
```

## Real-World Applications

### Example 1: Inventory Management System
```python
class InventoryManager:
    def __init__(self):
        self.inventory = {}
    
    def add_product(self, product_id, name, price, quantity):
        self.inventory[product_id] = {
            "name": name,
            "price": price,
            "quantity": quantity,
            "total_value": price * quantity
        }
    
    def update_quantity(self, product_id, new_quantity):
        if product_id in self.inventory:
            product = self.inventory[product_id]
            product["quantity"] = new_quantity
            product["total_value"] = product["price"] * new_quantity
    
    def get_total_value(self):
        return sum(item["total_value"] for item in self.inventory.values())
    
    def low_stock_items(self, threshold=10):
        return {pid: item for pid, item in self.inventory.items() 
                if item["quantity"] < threshold}

# Usage
inventory = InventoryManager()
inventory.add_product("P001", "Laptop", 999.99, 5)
inventory.add_product("P002", "Mouse", 25.99, 50)
inventory.add_product("P003", "Keyboard", 75.99, 8)

print(f"Total inventory value: ${inventory.get_total_value():.2f}")
print(f"Low stock items: {inventory.low_stock_items()}")
```

### Example 2: Configuration Manager
```python
class ConfigManager:
    def __init__(self):
        self.config = {
            "database": {
                "host": "localhost",
                "port": 5432,
                "name": "myapp"
            },
            "api": {
                "timeout": 30,
                "retries": 3,
                "base_url": "https://api.example.com"
            },
            "features": {
                "debug_mode": False,
                "logging_level": "INFO"
            }
        }
    
    def get_setting(self, path):
        """Get setting using dot notation: 'database.host'"""
        keys = path.split('.')
        value = self.config
        for key in keys:
            value = value.get(key)
            if value is None:
                return None
        return value
    
    def set_setting(self, path, value):
        """Set setting using dot notation"""
        keys = path.split('.')
        current = self.config
        for key in keys[:-1]:
            if key not in current:
                current[key] = {}
            current = current[key]
        current[keys[-1]] = value

# Usage
config = ConfigManager()
print(f"Database host: {config.get_setting('database.host')}")
config.set_setting('features.debug_mode', True)
print(f"Debug mode: {config.get_setting('features.debug_mode')}")
```

### Example 3: Cache Implementation
```python
from functools import wraps
import time

class SimpleCache:
    def __init__(self, max_size=100):
        self.cache = {}
        self.max_size = max_size
        self.access_times = {}
    
    def get(self, key):
        if key in self.cache:
            self.access_times[key] = time.time()
            return self.cache[key]
        return None
    
    def set(self, key, value):
        if len(self.cache) >= self.max_size and key not in self.cache:
            # Remove least recently used item
            oldest_key = min(self.access_times, key=self.access_times.get)
            del self.cache[oldest_key]
            del self.access_times[oldest_key]
        
        self.cache[key] = value
        self.access_times[key] = time.time()

# Decorator for caching function results
def cached(cache_instance):
    def decorator(func):
        @wraps(func)
        def wrapper(*args):
            key = str(args)
            result = cache_instance.get(key)
            if result is None:
                result = func(*args)
                cache_instance.set(key, result)
            return result
        return wrapper
    return decorator

# Usage
cache = SimpleCache()

@cached(cache)
def expensive_calculation(n):
    time.sleep(1)  # Simulate expensive operation
    return n * n * n

# First call - slow
start = time.time()
result1 = expensive_calculation(5)
print(f"First call: {result1}, took {time.time() - start:.2f}s")

# Second call - fast (cached)
start = time.time()
result2 = expensive_calculation(5)
print(f"Second call: {result2}, took {time.time() - start:.2f}s")
```

## Dictionary Performance Tips

### 1. Use get() Instead of KeyError Handling
```python
# Slower
try:
    value = my_dict["key"]
except KeyError:
    value = "default"

# Faster
value = my_dict.get("key", "default")
```

### 2. Use dict() Constructor for Dynamic Creation
```python
# Creating from key-value pairs
keys = ["a", "b", "c"]
values = [1, 2, 3]
my_dict = dict(zip(keys, values))  # {'a': 1, 'b': 2, 'c': 3}
```

### 3. Memory-Efficient Key Testing
```python
# Check if key exists
if "key" in my_dict:  # O(1) operation
    print("Key found")
```

## 🎯 Practice Exercises

1. **Create a word frequency counter** that finds the most common words in a text file.

2. **Build a simple database** using nested dictionaries to store and query student information.

3. **Implement a shopping cart** system using dictionaries to track items, quantities, and prices.

4. **Create a configuration system** that can handle nested settings with dot notation access.

## Key Takeaways

- **Dictionary comprehensions** make code more readable and efficient
- **Nested dictionaries** are perfect for complex data structures
- **defaultdict** eliminates the need for key existence checks
- **Counter** is excellent for frequency counting
- Dictionaries are **hash tables** with O(1) average lookup time
- Use **get()** method for safe key access
- **setdefault()** is useful for initializing nested structures

Next lesson: We'll dive deep into Functions and their advanced features!