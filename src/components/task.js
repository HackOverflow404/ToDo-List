import { useState, useEffect } from "react";
import confetti from "canvas-confetti";

function Task({ name, id, handleDeleteTask }) {
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (completed) {
      for (let i = 0; i < 10; i++) {
        confetti({
          particleCount: 100,
          startVelocity: 30,
          spread: 360,
          origin: {
            x: Math.random(),
            y: Math.random() - 0.2,
          },
        });
      }
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
