import React from 'react'
import { useEffect, useState} from 'react';
import axios from 'axios';


// import { useWorkoutContext } from '../hooks/useWorkoutContext';

// components
import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';

function Home() {
    const [workouts, setWorkouts] = useState([]);
    // const {workouts, dispatch} = useWorkoutContext()

    useEffect(() => {
        axios.get('/api/workouts').then((res) => {
            setWorkouts(res.data)
            // dispatch({type: 'SET_WORKOUTS', payload:res.data})
        });
    },[])
    if (!workouts) return null;
  return (
    <div className='grid grid-cols-2 space-x-4 '>
        
        <div>
            {workouts && workouts.map((workout, id) => (
                <WorkoutDetails key={id} workout={workout}/>
            ))}
        </div>
        <div className='p-4 mt-8 mx-auto bg-[#f1f1f1] shadow-md w-[600px] '>
            <WorkoutForm/>
        </div>
    </div>
  )
}

export default Home