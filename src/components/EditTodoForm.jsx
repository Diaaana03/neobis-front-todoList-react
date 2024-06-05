import React, { useState } from "react";

export default function EditToDoForm({ editTodo, task }) {
  let [value, setValue] = useState(task.task);
  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
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
        <label htmlFor="task">Update task</label>
        <input
          type="text"
          id="task"
          value={value}
          placeholder="e.g. get a milk"
          onChange={(e) => setValue(e.target.value)}
        />
        <label className="category__label">Pick a category</label>
        <div className="category">
          <div className="categories">
            <input
              className="category__radio"
              type="radio"
              id="business"
              name="category"
              value="business"
            />
            <label htmlFor="business">Business</label>
          </div>
          <div className="categories">
            <input
              className="category__radio personal-radio"
              type="radio"
              id="personal"
              name="category"
              value="personal"
            />
            <label htmlFor="personal">Personal</label>
          </div>
        </div>
        <input type="submit" id="submit__btn" value="Update" />
        <h2>TODO List:</h2>
      </form>
    </main>
  );
}
