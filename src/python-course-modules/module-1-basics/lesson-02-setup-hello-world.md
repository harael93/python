# Lesson 2: Setup & Hello World

## ⚙️ Installing Python

### Step 1: Download Python

1. Go to 👉 [https://www.python.org/downloads/](https://www.python.org/downloads/)
2. Click "Download Python 3.x" (latest version)
3. Run the installer

### Step 2: Installation Tips

**Important for Windows users:**
- ✅ **Check the box "Add Python to PATH"** when installing
- This allows you to run Python from any terminal/command prompt

**For Mac users:**
- Python might already be installed, but install the latest version anyway
- The installer will update your system

**For Linux users:**
- Most distributions come with Python pre-installed
- You might need to install `python3-pip` separately

### Step 3: Verify Installation

Open your terminal/command prompt and type:

```bash
python --version
```

You should see something like:
```
Python 3.12.1
```

**Note**: On some systems, you might need to use `python3` instead of `python`.

---

## 👋 Your First Python Program

### Method 1: Using a Text Editor

1. **Create a new file** called `hello.py`
2. **Open it in a text editor** (VS Code, Notepad++, or even Notepad)
3. **Type this code**:

```python
print("Hello, world!")
```

4. **Save the file**
5. **Run it in terminal**:

```bash
python hello.py
```

**Output:**
```
Hello, world!
```

🎉 **Congratulations!** You just ran your first Python program!

### Method 2: Interactive Python (REPL)

You can also run Python interactively:

1. **Open terminal/command prompt**
2. **Type** `python` and press Enter
3. **You'll see something like**:

```python
Python 3.12.1 (main, Dec  7 2023, 12:00:00)
[GCC 9.4.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>>
```

4. **Type your code directly**:

```python
>>> print("Hello, world!")
Hello, world!
>>>
```

5. **Exit with** `exit()` or `Ctrl+D`

---

## 🛠 Recommended Tools

### Text Editors/IDEs

**For Beginners:**
- **VS Code** (Free, excellent Python support)
- **PyCharm Community** (Free, Python-specific)
- **IDLE** (Comes with Python installation)

**Simple Options:**
- **Notepad++** (Windows)
- **TextEdit** (Mac)
- **nano/vim** (Linux)

### VS Code Setup (Recommended)

1. **Download VS Code**: [https://code.visualstudio.com/](https://code.visualstudio.com/)
2. **Install Python Extension**:
   - Open VS Code
   - Go to Extensions (Ctrl+Shift+X)
   - Search for "Python"
   - Install the Microsoft Python extension

3. **Create your first project**:
   - Create a new folder: `my-python-projects`
   - Open it in VS Code
   - Create a new file: `hello.py`
   - Type your code and run it!

---

## 🔍 Understanding Your First Program

Let's break down what happened:

```python
print("Hello, world!")
```

- **`print()`**: A built-in Python function that displays text
- **`"Hello, world!"`**: A string (text) that we want to display
- **Parentheses `()`**: Tell Python to execute the function
- **Quotes `""`**: Mark the beginning and end of text

### Try These Variations:

```python
print("Welcome to Python!")
print("My name is [Your Name]")
print("Python is awesome!")
```

---

## 📝 Practice Exercises

### Exercise 1: Personal Introduction
Create a program that prints:
- Your name
- Your age
- Your favorite hobby

Example:
```python
print("Hi, I'm Alice")
print("I'm 25 years old")
print("I love reading books")
```

### Exercise 2: Multiple Prints
Write a program that prints a simple ASCII art or pattern:

```python
print("  *  ")
print(" *** ")
print("*****")
print(" *** ")
print("  *  ")
```

### Exercise 3: Python Info
Create a program that prints information about Python:

```python
print("Python was created by Guido van Rossum")
print("It was first released in 1991")
print("Python is named after Monty Python's Flying Circus")
```

---

## 🐛 Common Issues & Solutions

### Problem: "python is not recognized"
**Solution**: Add Python to your PATH environment variable
- Reinstall Python and check "Add to PATH"
- Or manually add Python installation folder to PATH

### Problem: "No module named..."
**Solution**: Make sure you're using the correct Python version
- Try `python3` instead of `python`
- Check your installation

### Problem: Syntax errors
**Solution**: Check for:
- Missing quotes
- Missing parentheses
- Incorrect indentation (we'll learn about this later)

---

## ✅ Lesson Complete!

You now know how to:
- Install Python on your system
- Write and run a basic Python program
- Use the `print()` function
- Set up a development environment

**Test your knowledge:**
- Can you write a program that prints your favorite quote?
- Can you run Python interactively in the terminal?

**Other resources**
video example of helloworld and other basics:[python for beginners](https://www.youtube.com/watch?v=b093aqAZiPU)

