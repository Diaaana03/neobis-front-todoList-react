import React, { useState, useEffect, useRef } from "react";
import Task from "./Task";

export default function Main() {
  const [taskValue, setTaskValue] = useState("");
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) ?? []
  );

  const inputRef = useRef();
  const tasksRef = useRef();

  let category = "business";

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
          <input
            onClick={addTask}
            type="submit"
            id="submit__btn"
            value="Add Todo"
          />
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
        </form>
      </main>
    </>
  );
}

// import React, { useState } from "react";

// export default function ToDoForm({ addTodo }) {
//   let [value, setValue] = useState("");
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addTodo(value);
//     setValue = "";
//   };
//   console.log(value);
//   return (
//     <main>
//       <h1 className="header__text">What's up,</h1>
//       <input
//         className="title"
//         type="text"
//         placeholder="Name here"
//         name="title"
//         id="title"
//       />
//       <h2>CREATE A TODO</h2>
//       <form className="todo-form" onSubmit={handleSubmit}>
//         <label htmlFor="task">What's on your todo list?</label>
//         <input
//           type="text"
//           id="task"
//           value={value}
//           placeholder="e.g. get a milk"
//           onChange={(e) => setValue(e.target.value)}
//         />
//         <label className="category__label">Pick a category</label>
//         <div className="category">
//           <div className="categories">
//             <input
//               className="category__radio"
//               type="radio"
//               id="business"
//               name="category"
//               value="business"
//             />
//             <label htmlFor="business">Business</label>
//           </div>
//           <div className="categories">
//             <input
//               className="category__radio personal-radio"
//               type="radio"
//               id="personal"
//               name="category"
//               value="personal"
//             />
//             <label htmlFor="personal">Personal</label>
//           </div>
//         </div>
//         <input type="submit" id="submit__btn" value="Add Todo" />
//         <h2>TODO List:</h2>
//       </form>
//     </main>
//   );
// }
