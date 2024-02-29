const db = require("../database/database");

const getAllWorkouts = async (req, res) => {
  try {
    const workouts = await db.any("SELECT * FROM workouts;");
    res.status(200).json(workouts);
  } catch (error) {
    console.error("Workouts Error:", error);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

const getWorkoutsByMuscle = async (req, res) => {
  const muscle = req.params.muscle.toLowerCase();
  const validMuscles = [
    "abdominals",
    "abductors",
    "adductors",
    "biceps",
    "calves",
    "chest",
    "forearms",
    "glutes",
    "hamstrings",
    "lats",
    "lower_back",
    "middle_back",
    "neck",
    "quadriceps",
    "traps",
    "triceps",
  ];

  if (!validMuscles.includes(muscle)) {
    return res.status(400).json({ error: "Invalid Muscle Group Provided" });
  }

  try {
    const workouts = await db.any("SELECT * FROM workouts WHERE muscle = $1", [
      muscle,
    ]);
    res.status(200).json(workouts);
  } catch (error) {
    console.error("Workouts Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getWorkoutByName = async (req, res) => {
  const workoutName = req.params.name;

  try {
    const workout = await db.oneOrNone(
      "SELECT * FROM workouts WHERE name = $1",
      [workoutName]
    );

    if (workout) {
      res.status(200).json(workout);
    } else {
      res.status(404).json({ error: "Workout not found" });
    }
  } catch (error) {
    console.error("Error fetching workout:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getWorkoutsByType = async (req, res) => {
  const type = req.params.type.toLowerCase();
  const validTypes = [
    "cardio",
    "olympic_weightlifting",
    "plyometrics",
    "powerlifting",
    "strength",
    "stretching",
    "strongman",
  ];

  if (!validTypes.includes(type)) {
    return res.status(400).json({ error: "Invalid Type Provided" });
  }

  try {
    const workouts = await db.any("SELECT * FROM workouts WHERE type = $1", [
      type,
    ]);
    res.status(200).json(workouts);
  } catch (error) {
    console.error("Workouts Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getWorkoutsByDifficulty = async (req, res) => {
  const difficulty = req.params.difficulty.toLowerCase();
  const validDifficulty = ["beginner", "intermediate", "expert"];

  if (!validDifficulty.includes(difficulty)) {
    return res.status(400).json({ error: "Invalid Difficulty Provided" });
  }

  try {
    const workouts = await db.any(
      "SELECT * FROM workouts WHERE difficulty = $1",
      [difficulty]
    );
    res.status(200).json(workouts);
  } catch (error) {
    console.error("Workouts Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getAllWorkouts,
  getWorkoutsByMuscle,
  getWorkoutByName,
  getWorkoutsByType,
  getWorkoutsByDifficulty,

};
