# Lesson 01: Introduction to Flask and APIs

## What is Flask?
Flask is a lightweight Python web framework for building web applications and APIs. It's easy to use and great for rapid development.

## What is an API?
An API (Application Programming Interface) allows different software systems to communicate. Web APIs use HTTP to send and receive data.

## Why Use Flask for APIs?
- Simple and flexible
- Minimal setup
- Great for learning RESTful design

## Example: Hello World API
```python
from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello():
    return "Hello, World!"

if __name__ == '__main__':
    app.run(debug=True)
```

## Exercise
- Install Flask using `pip install flask`.
- Run the example and visit `http://localhost:5000` in your browser.
