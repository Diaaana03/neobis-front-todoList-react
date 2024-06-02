import React, { useState } from "react";

export default function ToDoForm({ addTodo }) {
  let [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue = "";
  };
  console.log(value);
  return (
    <main>
      <h1 className="header__text">What's up,</h1>
      <input
        className="title"
        type="text"
        placeholder="Name here"
        name="title"
        id="title"
      />
      <h2>CREATE A TODO</h2>
      <form className="todo-form" onSubmit={handleSubmit}>
        <label htmlFor="task">What's on your todo list?</label>
        <input
          type="text"
          id="task"
          value={value}
          placeholder="e.g. get a milk"
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </main>
  );
}
