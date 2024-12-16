import express, { json } from 'express';
import { getTodos, addTodo, updateTodo, deleteTodo } from './store.js';

const app = express();

app.use(json())

const PORT = process.env.PORT || 3000;

// Routes
app.get('/todos', (req, res) => {
  res.json(getTodos());
});

app.post('/todos', (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }
  const todo = addTodo(title);
  res.status(201).json(todo);
});

app.put('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const updates = req.body;

  const updatedTodo = updateTodo(id, updates);
  if (!updatedTodo) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  res.json(updatedTodo);
});

app.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  const success = deleteTodo(id);
  if (!success) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  res.status(200).json({ deleted: success });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
