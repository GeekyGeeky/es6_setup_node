let todos = [];
let idCounter = 1;

export const getTodos = () => todos;

export const addTodo = (title) => {
  const todo = { id: idCounter++, title, completed: false };
  todos.push(todo);
  return todo;
};

export const updateTodo = (id, updates) => {
  const todo = todos.find((t) => t.id === id);
  if (!todo) return null;

  Object.assign(todo, updates);
  return todo;
};

export const deleteTodo = (id) => {
  const index = todos.findIndex((t) => t.id === id);
  if (index !== -1) {
    todos.splice(index, 1);
    return true;
  }
  return false;
};
