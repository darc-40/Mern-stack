import React, { useEffect, useState } from "react";
import axios from "axios";

function WorkoutDetails({ workout }) {
  
  const [workouts, setWorkouts] = useState([]);
  // const {workouts, dispatch} = useWorkoutContext()

  useEffect(() => {
      axios.get('/api/workouts').then((res) => {
          setWorkouts(res.data)
          // dispatch({type: 'SET_WORKOUTS', payload:res.data})
      });
  },[])
  if (!workouts) return null;


  const deletePost = () => {
    axios.delete('/api/workouts/', + workout._id).then(() => {
        alert('workout deleted')
        setWorkouts(null);
    })
    if(!workouts) return 'No workout'
  };
  return (
    <div className="m-8 bg-[#f1f1f1] space-y-2 shadow-md p-4  flex  justify-between">
      <div>
        <h4 className="uppercase text-green-600 font-semibold">
          {workout.title}
        </h4>
        <p className="text-green-400 text-sm">Loads kg: {workout.load} </p>
        <p className="text-green-400 text-sm">Reps kg: {workout.reps} </p>
        <p className="text-green-400 text-sm">{workout.createdAt} </p>
      </div>
      <div className="p-1 space-x-1">
        <button className="text-md  text-green-500 border border-spacing-2 border-green-950 p-1 rounded-md hover:bg-green-900 hover:text-white">
          update
        </button>
        <button className="text-md  text-red-500 border border-spacing-2 border-red-950 p-1 rounded-md hover:bg-red-900 hover:text-white"
        onClick={deletePost}
        >
          delete
        </button>
      </div>
    </div>
  );
}

export default WorkoutDetails;
