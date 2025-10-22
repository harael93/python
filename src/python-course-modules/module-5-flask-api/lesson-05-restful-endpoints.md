# Lesson 05: Building RESTful Endpoints

## What is REST?
REST (Representational State Transfer) is an architectural style for designing APIs. RESTful APIs use HTTP methods to perform CRUD operations:
- **GET**: Retrieve data
- **POST**: Create data
- **PUT/PATCH**: Update data
- **DELETE**: Remove data

## Example: Task Manager Endpoints
```python
from flask import Flask, request, jsonify
app = Flask(__name__)
tasks = []

@app.route('/tasks', methods=['GET'])
def get_tasks():
    return jsonify(tasks)

@app.route('/tasks', methods=['POST'])
def add_task():
    task = request.get_json()
    tasks.append(task)
    return jsonify(task), 201

@app.route('/tasks/<int:task_id>', methods=['PUT'])
def update_task(task_id):
    task = request.get_json()
    tasks[task_id] = task
    return jsonify(task)

@app.route('/tasks/<int:task_id>', methods=['DELETE'])
def delete_task(task_id):
    tasks.pop(task_id)
    return '', 204
```

## Exercise
- Implement all CRUD endpoints for a simple resource (e.g., tasks).
- Test your API using Postman or curl.
