# Lesson 04: Working with JSON and Data

## Returning JSON Responses
Flask makes it easy to return JSON data using `jsonify`.

```python
from flask import jsonify
@app.route('/api/data')
def get_data():
    data = {'name': 'Alice', 'age': 30}
    return jsonify(data)
```

## Receiving JSON Data
```python
from flask import request
@app.route('/api/echo', methods=['POST'])
def echo():
    data = request.get_json()
    return jsonify(data)
```

## Connecting to Data Sources
You can connect your API to databases, files, or other sources.

## Exercise
- Create a route that returns a list of tasks as JSON.
- Create a route that accepts a new task via POST and adds it to the list.
