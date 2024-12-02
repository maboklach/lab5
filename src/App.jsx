import React, { useState, useEffect } from 'react';
import Todo from './Todo';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      const newTodoItem = {
        id: Date.now(),
        text: newTodo,
        checked: false,
      };
      setTodos([...todos, newTodoItem]);
      setNewTodo('');
    } else {
      alert('Завдання не може бути порожнім!');
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container">
      <h1 className="mt-5">My TODO App</h1>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Введіть нове завдання"
        />
        <button className="btn btn-primary mt-2" onClick={addTodo}>
          Додати
        </button>
      </div>
      <ul className="list-group">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            toggleTodo={() => toggleTodo(todo.id)}
            deleteTodo={() => deleteTodo(todo.id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
