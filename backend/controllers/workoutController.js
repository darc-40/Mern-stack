const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");

// geting all workouts
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1})
    res.status(200).json(workouts)
}

// Geting single data
const getSingleWorkout = async (req,res) => {
    const {id } = req.params
    if(!mongoose.Types.ObjectId.isValid(d)){
        return res.status(404).json({error:'No such workout'})
    }
    const workout = await Workout.findById(id)
    if(!workout) {
        return res.status(404).json({error:'No such workout'})
    }
    res.status(200).json(workout)
}

// creating a new workout
const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;
  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// deleting a workout
const deleteWorkout = async (req, res) => {
  const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(d)){
        return res.status(404).json({error:'No such workout'})
    }
    const workout = Workout.findByIdAndDelete({_id:id})
    if(!workout) {
      return res.status(404).json({error:'No such workout'})
  }
  res.status(200).json(workout)
}

// udating an id
const updateorkout = async (req, res) => {
  const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(d)){
        return res.status(404).json({error:'No such workout'})
    }
    const workout = Workout.findOneAndUpdate({_id:id}, {...req.body})
    if(!workout) {
      return res.status(404).json({error:'No such workout'})
  }
  res.status(200).json(workout)
}

// exporting the controller
module.exports = {
    createWorkout,
    getSingleWorkout,
    getWorkouts,
    deleteWorkout,
    updateorkout
}