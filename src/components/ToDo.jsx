// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
// import { faTrash } from "@fortawesome/free-solid-svg-icons";

// export const ToDo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
//   return (
//     <main>
//       <div className="tasks task-result">
//         <p
//           className={`${task.completed ? "completed" : "incompleted"}`}
//           onClick={() => toggleComplete(task.id)}
//         >
//           {task.task}
//           <FontAwesomeIcon
//             className="edit-icon"
//             icon={faPenToSquare}
//             onClick={() => editTodo(task.id)}
//           />
//           <FontAwesomeIcon
//             className="delete-icon"
//             icon={faTrash}
//             onClick={() => deleteTodo(task.id)}
//           />
//         </p>
//       </div>
//     </main>
//   );
// };
