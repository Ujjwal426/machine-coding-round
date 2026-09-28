import React, { useState } from "react";

const TodoList = () => {
  const [value, setValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = value.trim();
    if (!text) return;

    if (editingId) {
      // Update
      setTodoList((prev) =>
        prev.map((todo) => (todo.id === editingId ? { ...todo, text } : todo))
      );
      setEditingId(null);
    } else {
      // Add
      setTodoList((prev) => [...prev, { id: Date.now(), text }]);
    }
    setValue("");
  };

  const handleEdit = (todo) => {
    setEditingId(todo.id);
    setValue(todo.text);
  };

  const handleRemove = (id) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
    // Deleting the todo being edited: reset the form
    if (id === editingId) {
      setEditingId(null);
      setValue("");
    }
  };

  return (
    <div className="flex justify-center mt-6">
      <div className="w-full max-w-md">
        <form className="flex gap-2" onSubmit={handleSubmit}>
          <input
            className="flex-1 p-2 rounded-md border border-gray-400"
            placeholder="Add a todo"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="bg-blue-500 text-white px-4 rounded-md cursor-pointer">
            {editingId ? "Update" : "Add"}
          </button>
        </form>

        <ul className="mt-3">
          {todoList.map((todo) => (
            <li key={todo.id} className="flex items-center gap-2 py-1">
              <span className="flex-1">{todo.text}</span>
              <button className="cursor-pointer" onClick={() => handleEdit(todo)}>
                📝
              </button>
              <button
                className="cursor-pointer"
                onClick={() => handleRemove(todo.id)}
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
