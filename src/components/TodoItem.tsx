import React from "react";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
}

/* block of code used to check/uncheck to-do task */
const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo }) => {
  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span className="todo-title">{todo.title}</span>
    </div>
  );
};

export default TodoItem;
