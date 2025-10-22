# Lesson 03: Connecting React to Flask APIs

## Making API Requests from React
Use `fetch` or `axios` to send HTTP requests from React to Flask.

### Example with fetch
```javascript
fetch('http://localhost:5000/tasks')
  .then(response => response.json())
  .then(data => console.log(data));
```

### Example with axios
```javascript
import axios from 'axios';
axios.get('http://localhost:5000/tasks')
  .then(response => console.log(response.data));
```

## Handling CORS
Flask needs to allow requests from React. Use `flask-cors`:
```bash
pip install flask-cors
```
```python
from flask_cors import CORS
CORS(app)
```

## Exercise
- Make a GET request from React to your Flask API and display the data.
