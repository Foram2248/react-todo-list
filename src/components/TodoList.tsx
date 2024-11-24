import React from "react";
import TodoItem from "./TodoItem";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
}

/* block of code used to display added to-do task */
const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo} 
        />
      ))}
    </div>
  );
};

export default TodoList;
