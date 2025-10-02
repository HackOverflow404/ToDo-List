import { useState, useEffect } from "react";
import confetti from "canvas-confetti";

function Task({ name, id, handleDeleteTask }) {
  const [completed, setCompleted] = useState(false);
  
  useEffect(() => {
    if (completed) {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0 },
      });
    }
  }, [completed]);

  return (
    <div>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => setCompleted(!completed)}
        id={name}
      />
      <label
        htmlFor={name}
        style={{ textDecoration: completed ? "line-through" : "none" }}
      >
        {name}
      </label>
      <button
        onClick={() => {
          handleDeleteTask(id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default Task;
