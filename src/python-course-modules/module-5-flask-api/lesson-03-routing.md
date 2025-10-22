# Lesson 03: Routing and Request Handling

## What is Routing?
Routing maps URLs to functions in your Flask app. Each route defines an endpoint for your API.

## Defining Routes
```python
@app.route('/hello')
def hello():
    return "Hello!"
```

## Handling HTTP Methods
```python
@app.route('/greet', methods=['POST'])
def greet():
    return "Greetings!"
```

## Accessing Request Data
```python
from flask import request
@app.route('/echo', methods=['POST'])
def echo():
    data = request.json
    return data
```

## Exercise
- Add a route that accepts a name and returns a greeting.
- Add a route that accepts POST data and echoes it back.
