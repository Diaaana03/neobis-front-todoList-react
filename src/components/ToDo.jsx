import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const ToDo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  return (
    <main>
      <h2>TODO List</h2>
      <div className="tasks">
        <p
          className={`${task.completed ? "completed" : "incompleted"}`}
          onClick={() => toggleComplete(task.id)}
        >
          {task.task}
        </p>
        <FontAwesomeIcon
          className="edit-icon"
          icon={faPenToSquare}
          onClick={() => editTodo(task.id)}
        />
        <FontAwesomeIcon
          className="delete-icon"
          icon={faTrash}
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </main>
  );
};
