import React, { useState } from 'react';

interface TodoInputProps {
  onAddTodo: (title: string) => void;
}

/* block of code used to add a new to-do task */
const TodoInput: React.FC<TodoInputProps> = ({ onAddTodo }) => {
  const [title, setTitle] = useState('');

  const handleAdd = () => {
    if (title.trim()) {
      onAddTodo(title);
      setTitle('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a new todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default TodoInput;
