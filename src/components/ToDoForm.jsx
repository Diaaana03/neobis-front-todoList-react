import React, { useRef, useState, useEffect } from "react";
import Task from "./Task";
import useColor from "../stores/useColor";

export default function Main() {
  const getBlueColor = useColor((state) => {
    return state.getBlueColor;
  });
  const getPinkColor = useColor((state) => {
    return state.getPinkColor;
  });

  const [taskValue, setTaskValue] = useState("");
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) ?? []
  );

  const inputRef = useRef();
  const tasksRef = useRef();

  // radio buttons

  let category = "business";

  function chooseCategory(event) {
    const radioInput = event.target.closest(".category__radio");

    if (radioInput && radioInput.classList.contains("personal-radio")) {
      category = "personal";
      getPinkColor();
    } else {
      category = "business";
      getBlueColor();
    }
  }

  function addTask(event) {
    event.preventDefault();

    const inputValue = inputRef.current.value;
    inputValue
      ? setTasks([...tasks, { text: inputValue, category: category }])
      : alert("Please write your to do task");
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
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
        <form className="todo-form">
          <label htmlFor="task">What's on your todo list?</label>
          <input
            ref={inputRef}
            type="text"
            id="task"
            placeholder="e.g. get a milk"
            name="task"
          />
          <label className="category__label">Pick a category</label>
          <div className="category" onClick={chooseCategory}>
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
          <button
            onClick={addTask}
            type="submit"
            className="submit__btn"
            value="Add Todo"
            defaultValue="Add Todo"
          >
            Add Todo
          </button>
        </form>
        <h2>TODO List:</h2>
        <div ref={tasksRef} className="tasks">
          {tasks.map((task, index) => (
            <Task
              key={task.text + index}
              index={index}
              tasks={tasks}
              setTasks={setTasks}
              post={task.text}
              category={task.category}
            />
          ))}
        </div>
      </main>
    </>
  );
}
