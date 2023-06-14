import { useContext } from "react";
import { workoutsContext } from "../context/WorkoutContext";

export const useWorkoutContext = () => {
    const context = useContext(workoutsContext)
    if(!context){
        throw Error('useworkoutContext must be used inside context provider')
    }
    return context;
}