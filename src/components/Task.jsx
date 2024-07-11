import { useRef, useState } from "react";

export default function Task({ post, category, setTasks, index, tasks }) {
  const [isEditing, setIsEditing] = useState(false);
  const [taskValue, setTaskValue] = useState(post);
  const taskInputRef = useRef();

  function editButton(event) {
    event.preventDefault();
    setIsEditing(true);
    taskInputRef.current.disabled = false;
    taskInputRef.current.focus();
  }

  function saveTask() {
    setIsEditing(false);
    taskInputRef.current.disabled = true;
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, text: taskValue } : task
    );
    setTasks(updatedTasks);
  }

  function deleteButton(event) {
    const deletedTasks = tasks.filter((item, i) => i !== index);
    setTasks(deletedTasks);
  }

  function completeTask(event) {
    taskInputRef.current.checked = !taskInputRef.current.checked;
    taskInputRef.current.checked == true
      ? (taskInputRef.current.style.textDecoration = "line-through")
      : (taskInputRef.current.style.textDecoration = "none");
  }

  return (
    <div className="task-container">
      <input
        onClick={completeTask}
        type="checkbox"
        className={`task-complete ${
          category === "business" ? "checkbox-blue" : "checkbox-pink"
        }`}
      />
      <input
        ref={taskInputRef}
        value={taskValue}
        disabled={!isEditing}
        onChange={(e) => setTaskValue(e.target.value)}
        className="task-result"
        style={{ boxShadow: "inset" }}
      />
      {isEditing ? (
        <button onClick={saveTask} className="save">
          save
        </button>
      ) : (
        <button onClick={editButton} className="edit">
          edit
        </button>
      )}
      <button onClick={deleteButton} className="delete">
        delete
      </button>
    </div>
  );
}
