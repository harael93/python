# Lesson 04: Handling Asynchronous Requests in React

## What is Asynchronous Programming?
Asynchronous programming lets your app handle multiple tasks at once, such as fetching data from an API without freezing the UI.

## Using useEffect and useState
```javascript
import React, { useEffect, useState } from 'react';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/tasks')
      .then(res => res.json())
      .then(data => setTasks(data));
  }, []);
  return (
    <ul>
      {tasks.map((task, idx) => <li key={idx}>{task.name}</li>)}
    </ul>
  );
}
```

## Error Handling
Always handle errors in async requests:
```javascript
fetch('...')
  .then(res => res.json())
  .catch(err => console.error(err));
```

## Exercise
- Fetch data from Flask in a React component and display it.
- Add error handling for failed requests.
