# Lesson 5: File Handling

## 🎯 Working with Files in Python

File handling is essential for reading data, saving results, and creating persistent applications. Python makes file operations simple and powerful.

## Basic File Operations

### Opening and Reading Files

```python
# Basic file reading
with open('data.txt', 'r') as file:
    content = file.read()
    print(content)

# Reading line by line
with open('data.txt', 'r') as file:
    for line in file:
        print(line.strip())  # strip() removes newline characters

# Reading all lines into a list
with open('data.txt', 'r') as file:
    lines = file.readlines()
    print(lines)
```

### Writing Files
```python
# Writing text to file
with open('output.txt', 'w') as file:
    file.write("Hello, World!\n")
    file.write("This is a new line.")

# Writing multiple lines
lines = ["Line 1\n", "Line 2\n", "Line 3\n"]
with open('multiple_lines.txt', 'w') as file:
    file.writelines(lines)

# Appending to existing file
with open('output.txt', 'a') as file:
    file.write("\nThis line is appended.")
```

## File Modes

| Mode | Description | Creates File | Overwrites |
|------|-------------|--------------|------------|
| `'r'` | Read only | No | N/A |
| `'w'` | Write only | Yes | Yes |
| `'a'` | Append only | Yes | No |
| `'r+'` | Read and write | No | No |
| `'w+'` | Write and read | Yes | Yes |
| `'x'` | Exclusive creation | Yes | Fails if exists |

```python
# Different file modes
try:
    # Exclusive creation - fails if file exists
    with open('new_file.txt', 'x') as file:
        file.write("This is a new file")
except FileExistsError:
    print("File already exists!")

# Read and write mode
with open('data.txt', 'r+') as file:
    content = file.read()
    file.write("\nAdded content")
```

## Working with CSV Files

### Reading CSV Files
```python
import csv

# Basic CSV reading
with open('students.csv', 'r') as file:
    csv_reader = csv.reader(file)
    header = next(csv_reader)  # Read header row
    print(f"Headers: {header}")
    
    for row in csv_reader:
        print(row)

# Reading CSV with DictReader
with open('students.csv', 'r') as file:
    csv_reader = csv.DictReader(file)
    for row in csv_reader:
        print(f"Name: {row['name']}, Age: {row['age']}, Grade: {row['grade']}")
```

### Writing CSV Files
```python
import csv

# Writing CSV data
students = [
    ['Name', 'Age', 'Grade'],
    ['Alice', 20, 'A'],
    ['Bob', 19, 'B'],
    ['Charlie', 21, 'A-']
]

with open('students_output.csv', 'w', newline='') as file:
    csv_writer = csv.writer(file)
    csv_writer.writerows(students)

# Writing with DictWriter
students_dict = [
    {'name': 'Alice', 'age': 20, 'grade': 'A'},
    {'name': 'Bob', 'age': 19, 'grade': 'B'},
    {'name': 'Charlie', 'age': 21, 'grade': 'A-'}
]

with open('students_dict.csv', 'w', newline='') as file:
    fieldnames = ['name', 'age', 'grade']
    csv_writer = csv.DictWriter(file, fieldnames=fieldnames)
    
    csv_writer.writeheader()
    csv_writer.writerows(students_dict)
```

## Working with JSON Files

### Reading JSON
```python
import json

# Reading JSON file
with open('data.json', 'r') as file:
    data = json.load(file)
    print(data)
    print(f"Name: {data['name']}")

# Reading JSON string
json_string = '{"name": "Alice", "age": 25, "city": "New York"}'
data = json.loads(json_string)
print(data['name'])
```

### Writing JSON
```python
import json

# Writing to JSON file
data = {
    "students": [
        {"name": "Alice", "age": 20, "grades": [85, 90, 88]},
        {"name": "Bob", "age": 19, "grades": [78, 85, 92]}
    ]
}

with open('students.json', 'w') as file:
    json.dump(data, file, indent=4)

# Converting to JSON string
json_string = json.dumps(data, indent=2)
print(json_string)
```

## File and Directory Operations

### Working with Paths
```python
import os
from pathlib import Path

# Using os module
current_dir = os.getcwd()
file_path = os.path.join(current_dir, 'data', 'file.txt')
print(f"File path: {file_path}")

# Check if file/directory exists
if os.path.exists('data.txt'):
    print("File exists")

if os.path.isdir('data'):
    print("Directory exists")

# Using pathlib (modern approach)
path = Path('data') / 'file.txt'
print(f"Path: {path}")

if path.exists():
    print("Path exists")

if path.is_file():
    print("It's a file")
```

### Directory Operations
```python
import os
import shutil
from pathlib import Path

# Create directory
os.makedirs('new_directory', exist_ok=True)

# List directory contents
for item in os.listdir('.'):
    print(item)

# Using pathlib
path = Path('.')
for item in path.iterdir():
    if item.is_file():
        print(f"File: {item.name}")
    elif item.is_dir():
        print(f"Directory: {item.name}")

# Copy and move files
shutil.copy('source.txt', 'destination.txt')
shutil.move('old_location.txt', 'new_location.txt')
```

## Error Handling with Files

```python
def safe_file_read(filename):
    try:
        with open(filename, 'r') as file:
            return file.read()
    except FileNotFoundError:
        print(f"Error: File '{filename}' not found")
        return None
    except PermissionError:
        print(f"Error: Permission denied for '{filename}'")
        return None
    except Exception as e:
        print(f"Unexpected error: {e}")
        return None

def safe_file_write(filename, content):
    try:
        with open(filename, 'w') as file:
            file.write(content)
        return True
    except PermissionError:
        print(f"Error: Cannot write to '{filename}' - permission denied")
        return False
    except Exception as e:
        print(f"Error writing file: {e}")
        return False

# Usage
content = safe_file_read('data.txt')
if content:
    print(content)

success = safe_file_write('output.txt', "Hello, World!")
if success:
    print("File written successfully")
```

## Real-World Applications

### Example 1: Log File Analyzer
```python
import re
from datetime import datetime
from collections import Counter

class LogAnalyzer:
    def __init__(self, log_file):
        self.log_file = log_file
        self.entries = []
        
    def parse_log(self):
        """Parse log file and extract information"""
        log_pattern = r'(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}) - (\w+) - (.+)'
        
        try:
            with open(self.log_file, 'r') as file:
                for line in file:
                    match = re.match(log_pattern, line.strip())
                    if match:
                        timestamp_str, level, message = match.groups()
                        timestamp = datetime.strptime(timestamp_str, '%Y-%m-%d %H:%M:%S')
                        self.entries.append({
                            'timestamp': timestamp,
                            'level': level,
                            'message': message
                        })
        except FileNotFoundError:
            print(f"Log file {self.log_file} not found")
            
    def get_error_count(self):
        """Count errors by type"""
        error_messages = [entry['message'] for entry in self.entries 
                         if entry['level'] == 'ERROR']
        return Counter(error_messages)
    
    def get_activity_by_hour(self):
        """Get activity count by hour"""
        hours = [entry['timestamp'].hour for entry in self.entries]
        return Counter(hours)
    
    def generate_report(self, output_file):
        """Generate analysis report"""
        with open(output_file, 'w') as file:
            file.write("=== Log Analysis Report ===\n\n")
            
            file.write(f"Total entries: {len(self.entries)}\n")
            
            # Level summary
            levels = Counter(entry['level'] for entry in self.entries)
            file.write("\nLog levels:\n")
            for level, count in levels.items():
                file.write(f"  {level}: {count}\n")
            
            # Error analysis
            errors = self.get_error_count()
            file.write(f"\nTop errors:\n")
            for error, count in errors.most_common(5):
                file.write(f"  {count}x: {error}\n")
            
            # Activity by hour
            activity = self.get_activity_by_hour()
            file.write(f"\nActivity by hour:\n")
            for hour in sorted(activity.keys()):
                file.write(f"  {hour:02d}:00 - {activity[hour]} entries\n")

# Usage
analyzer = LogAnalyzer('application.log')
analyzer.parse_log()
analyzer.generate_report('log_report.txt')
```

### Example 2: Data File Processor
```python
import csv
import json
from pathlib import Path

class DataProcessor:
    def __init__(self, data_directory):
        self.data_dir = Path(data_directory)
        
    def process_csv_files(self):
        """Process all CSV files in directory"""
        csv_files = self.data_dir.glob('*.csv')
        results = {}
        
        for csv_file in csv_files:
            print(f"Processing {csv_file.name}...")
            try:
                with open(csv_file, 'r') as file:
                    reader = csv.DictReader(file)
                    data = list(reader)
                    
                # Basic statistics
                results[csv_file.stem] = {
                    'row_count': len(data),
                    'columns': list(data[0].keys()) if data else [],
                    'file_size': csv_file.stat().st_size
                }
                
            except Exception as e:
                print(f"Error processing {csv_file}: {e}")
                
        return results
    
    def merge_csv_files(self, output_file, key_column='id'):
        """Merge multiple CSV files on a key column"""
        csv_files = list(self.data_dir.glob('*.csv'))
        if not csv_files:
            print("No CSV files found")
            return
            
        merged_data = {}
        
        for csv_file in csv_files:
            with open(csv_file, 'r') as file:
                reader = csv.DictReader(file)
                for row in reader:
                    key = row[key_column]
                    if key not in merged_data:
                        merged_data[key] = {}
                    merged_data[key].update(row)
        
        # Write merged data
        if merged_data:
            fieldnames = set()
            for record in merged_data.values():
                fieldnames.update(record.keys())
            
            with open(output_file, 'w', newline='') as file:
                writer = csv.DictWriter(file, fieldnames=list(fieldnames))
                writer.writeheader()
                writer.writerows(merged_data.values())
            
            print(f"Merged {len(csv_files)} files into {output_file}")
    
    def generate_summary_report(self):
        """Generate summary report in JSON format"""
        stats = self.process_csv_files()
        
        summary = {
            'total_files': len(stats),
            'total_rows': sum(s['row_count'] for s in stats.values()),
            'total_size': sum(s['file_size'] for s in stats.values()),
            'file_details': stats,
            'generated_at': datetime.now().isoformat()
        }
        
        with open(self.data_dir / 'summary_report.json', 'w') as file:
            json.dump(summary, file, indent=2)
        
        return summary

# Usage
processor = DataProcessor('data_files')
summary = processor.generate_summary_report()
processor.merge_csv_files('merged_data.csv')
```

### Example 3: Configuration Manager
```python
import json
import yaml  # pip install pyyaml
from pathlib import Path

class ConfigManager:
    def __init__(self, config_file='config.json'):
        self.config_file = Path(config_file)
        self.config = self.load_config()
    
    def load_config(self):
        """Load configuration from file"""
        if not self.config_file.exists():
            return self.create_default_config()
        
        try:
            with open(self.config_file, 'r') as file:
                if self.config_file.suffix == '.json':
                    return json.load(file)
                elif self.config_file.suffix in ['.yml', '.yaml']:
                    return yaml.safe_load(file)
        except Exception as e:
            print(f"Error loading config: {e}")
            return self.create_default_config()
    
    def create_default_config(self):
        """Create default configuration"""
        default_config = {
            'database': {
                'host': 'localhost',
                'port': 5432,
                'name': 'myapp',
                'user': 'admin'
            },
            'logging': {
                'level': 'INFO',
                'file': 'app.log',
                'max_size': 1048576  # 1MB
            },
            'features': {
                'debug_mode': False,
                'api_timeout': 30,
                'cache_enabled': True
            }
        }
        
        self.save_config(default_config)
        return default_config
    
    def save_config(self, config=None):
        """Save configuration to file"""
        config_to_save = config or self.config
        
        try:
            with open(self.config_file, 'w') as file:
                if self.config_file.suffix == '.json':
                    json.dump(config_to_save, file, indent=2)
                elif self.config_file.suffix in ['.yml', '.yaml']:
                    yaml.dump(config_to_save, file, default_flow_style=False)
        except Exception as e:
            print(f"Error saving config: {e}")
    
    def get(self, key, default=None):
        """Get configuration value using dot notation"""
        keys = key.split('.')
        value = self.config
        
        for k in keys:
            if isinstance(value, dict) and k in value:
                value = value[k]
            else:
                return default
        
        return value
    
    def set(self, key, value):
        """Set configuration value using dot notation"""
        keys = key.split('.')
        config = self.config
        
        for k in keys[:-1]:
            if k not in config:
                config[k] = {}
            config = config[k]
        
        config[keys[-1]] = value
        self.save_config()

# Usage
config = ConfigManager('app_config.json')
print(f"Database host: {config.get('database.host')}")
config.set('features.debug_mode', True)
print(f"Debug mode: {config.get('features.debug_mode')}")
```

## 🎯 Practice Exercises

1. **Create a file backup system** that copies files with timestamps.

2. **Build a CSV data cleaner** that removes invalid rows and standardizes formats.

3. **Write a log file rotator** that archives old logs when they get too large.

4. **Implement a simple database** using JSON files for data persistence.

5. **Create a file organizer** that sorts files into folders based on their extensions.

## Key Takeaways

- Always use **`with` statements** for file operations (automatic cleanup)
- Handle **exceptions** when working with files (FileNotFoundError, PermissionError)
- **CSV** and **JSON** are common formats with built-in Python support
- **pathlib** is the modern way to handle file paths
- File operations are **I/O bound** - consider performance for large files
- Always specify **encoding** for text files (utf-8 is recommended)
- Use appropriate **file modes** for your use case

Next lesson: We'll work on the Module 2 Project that combines all these concepts!