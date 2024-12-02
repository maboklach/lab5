import React from 'react';

function Todo({ todo, toggleTodo, deleteTodo }) {
  return (
    <li className="list-group-item">
      <input
        type="checkbox"
        className="form-check-input me-2"
        checked={todo.checked}
        onChange={toggleTodo}
      />
      <label
        className={
          todo.checked ? 'text-success text-decoration-line-through' : ''
        }
      >
        {todo.text}
      </label>
      <button className="btn btn-danger btn-sm float-end" onClick={deleteTodo}>
        Видалити
      </button>
    </li>
  );
}

export default Todo;
