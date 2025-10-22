# Module 5 Project: Task Manager API

## Project Overview
Build a Task Manager API using Flask. The API should allow users to create, read, update, and delete tasks. You will apply RESTful principles, handle JSON data, and organize your code for maintainability.

## Requirements
- **Flask app with RESTful endpoints**
- **CRUD operations for tasks**
- **Store tasks in memory or a file/database**
- **Return and accept JSON data**
- **Organize code into modules (routes, models, etc.)**

## Example Skeleton
```python
# app.py
from flask import Flask
from routes import task_routes
app = Flask(__name__)
app.register_blueprint(task_routes)

if __name__ == '__main__':
    app.run(debug=True)

# routes.py
from flask import Blueprint, request, jsonify

task_routes = Blueprint('tasks', __name__)
tasks = []

@task_routes.route('/tasks', methods=['GET'])
def get_tasks():
    return jsonify(tasks)

@task_routes.route('/tasks', methods=['POST'])
def add_task():
    task = request.get_json()
    tasks.append(task)
    return jsonify(task), 201
```

## Submission Checklist
- [ ] All endpoints implemented
- [ ] JSON data handled correctly
- [ ] Code organized into modules
- [ ] Well-documented code

Good luck!