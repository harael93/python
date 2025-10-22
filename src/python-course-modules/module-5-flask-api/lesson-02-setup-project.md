# Lesson 02: Setting Up a Flask Project

## Project Structure
A typical Flask project has the following structure:
```
task_manager_api/
├── app.py
├── requirements.txt
└── ...
```

## Installing Flask
```bash
pip install flask
```

## Creating the App
```python
from flask import Flask
app = Flask(__name__)
```

## Running the App
```bash
python app.py
```

## Exercise
- Create a new folder for your Flask project.
- Add an `app.py` file and initialize a Flask app.
- Run the app and verify it works.
