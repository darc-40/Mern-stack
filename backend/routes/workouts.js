const express = require("express");
const router = express.Router();
// const Workout = require("../models/workoutModel");
const {
  createWorkout,
  getSingleWorkout,
  getWorkouts,
  deleteWorkout,
  updateorkout
} = require('../controllers/workoutController')

// GET ALL DATA
router.get("/", getWorkouts);
// GETTING A SINLE DATA
router.get("/:id",getSingleWorkout);

// POSTING A SINLE DATA
router.post("/",createWorkout );

// UPDATING A SINLE DATA
router.patch("/:id", updateorkout);

// DELETING A SINLE DATA
router.delete("/:id", deleteWorkout);

module.exports = router;
