const db = require("../database/database");
const axios = require("axios");

const callExercisesApi = async ({ muscle, difficulty, type }) => {
  try {
    const response = await axios.get(
      "https://api.api-ninjas.com/v1/exercises",
      {
        params: { muscle, difficulty, type },
        headers: {
          "X-Api-Key": process.env.EXERCISE_API_KEY,
        },
      }
    );

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to fetch data");
    }
  } catch (error) {
    throw new Error("Error in API request");
  }
};

const insertWorkout = async (workout) => {
  try {
    const workoutExists = await db.oneOrNone(
      "SELECT * FROM workouts WHERE name = $1",
      [workout.name]
    );

    if (!workoutExists) {
      return await db.one(
        "INSERT INTO workouts(name, type, muscle, difficulty, instructions) VALUES($1, $2, $3, $4, $5) RETURNING *",
        [
          workout.name,
          workout.type,
          workout.muscle,
          workout.difficulty,
          workout.instructions,
        ]
      );
    }
  } catch (error) {
    throw new Error("Error inserting workout into the database");
  }
};

const getWorkouts = async (req, res, params) => {
  let newWorkout;

  try {
    const response = await callExercisesApi(params);

    for (let i = 0; i < response.length; i++) {
      const workout = response[i];
      newWorkout = await insertWorkout(workout);
    }

    if (newWorkout) {
      res.status(200).send(newWorkout);
    } else {
      res.status(200).send("No new workouts added");
    }
  } catch (error) {
    res.status(400).send("Error!");
  }
};

const getWorkoutsType = async (req, res) => {
  await getWorkouts(req, res, { type: req.params.muscle });
};

const getWorkoutsMuscle = async (req, res) => {
  await getWorkouts(req, res, { muscle: req.params.muscle });
};

const getWorkoutsDifficulty = async (req, res) => {
  await getWorkouts(req, res, { difficulty: req.params.difficulty });
};

const getWorkoutsWithMuscleAndDifficulty = async (req, res) => {
  const { muscle, difficulty } = req.params;
  if (!muscle && !difficulty) {
    return res
      .status(400)
      .send("At least one of muscle or difficulty should be provided.");
  }
  await getWorkouts(req, res, { muscle, difficulty });
};

module.exports = {
  getWorkoutsType,
  getWorkoutsMuscle,
  getWorkoutsDifficulty,
  getWorkoutsWithMuscleAndDifficulty,
};
