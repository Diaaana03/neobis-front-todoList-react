import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import { v4 as uuidv4 } from "uuid";
import { ToDo } from "./ToDo";
uuidv4();

export default function ToDoWrapper() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditinig: false },
    ]);
    console.log(todos);
  };
  return (
    <div>
      <ToDoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        <ToDo task={todo} key={index} />
      ))}
    </div>
  );
}
