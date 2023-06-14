import React from "react";
import { useState } from "react";

function WorkoutForm() {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);

  const hundleSubmit = async (e) => {
    e.preventDefault();

    const workout = { title, load, reps };

    const res = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await res.json();
    if (!res.ok) {
      setError(json.error);
    }
    if (res.ok) {
      setTitle("");
      setLoad("");
      setReps("");
      setError(null);
      console.log("new workout created", json);
    }
  };
  return (
    <div>
      <form action="" className="space-y-2 flex flex-col p-2 text-green-500  ">
        <h3>Add a new work out</h3>
        <label htmlFor="">Title :</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <label htmlFor="">Loads :</label>
        <input
          type="number"
          onChange={(e) => setLoad(e.target.value)}
          value={load}
        />
        <label htmlFor="">Reps :</label>
        <input
          type="number"
          onChange={(e) => setReps(e.target.value)}
          value={reps}
        />
        <button className="w-full bg-green-400 mt-2 p-2" onClick={hundleSubmit}>
          Add workout
        </button>
      </form>
    </div>
  );
}

export default WorkoutForm;
