const db = require("../database/database");


const getDailyWorkouts = async (req, res) => {
    try {
        const workouts = await db.any("SELECT * FROM dailyworkouts");
        res.status(200).json(workouts);
    } catch (error) {
        console.error("Workouts Error:", error);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
};


const getDailyWorkoutsbyDate = async (req, res) => {
    const dailyworkouts_id = req.params.date;
    try {
        const dailyworkouts = await db.oneOrNone("SELECT * FROM dailyworkouts WHERE dailyworkouts_id = $1", [dailyworkouts_id]);
        if (dailyworkouts) {
            res.status(200).send(dailyworkouts);
        }
    } catch (error) {
        res.status(404).json({
            error: "User not found"
        });
    }
}


  const insertWorkout = async (req, res) => {
    const userId = req.user.data.user_id;
    const { dailyworkout_id, workout_id, sets, reps } = req.body;
    const currentDate = new Date(); // Get the current date 
    console.log("hit");
    try {
        const workoutExists = await db.oneOrNone(
            "SELECT * FROM dailyworkouts WHERE dailyworkout_id = $1",
            [dailyworkout_id]
        );

        if (!workoutExists) {
            const insertedWorkout = await db.one(
                "INSERT INTO dailyworkouts(dailyworkout_id, user_id, workout_id, sets, reps, date) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
                [dailyworkout_id, userId, workout_id, sets, reps, currentDate]
            );
            return res.status(200).json({ success: true, workout: insertedWorkout, message: "Workout inserted successfully" });
        } else {
            return res.status(400).json({ success: false, message: "Workout already exists" });
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: "Error inserting workout into the database: " + error.message });
    }
};


const updateDailyWorkout = async (req, res) => {
  const { dailyworkout_id, user_id, workout_id, sets, reps } = req.body;
  const currentDate = new Date();
  try {
      const workoutExists = await db.oneOrNone(
          "SELECT * FROM dailyworkouts WHERE dailyworkout_id = $1",
          [dailyworkout_id]
      );

      if (!workoutExists) {
          return res.status(404).json({ success: false, message: "Daily workout not found" });
      }

      const updatedWorkout = await db.one(
          "UPDATE dailyworkouts SET user_id = $1, workout_id = $2, sets = $3, reps = $4 WHERE dailyworkout_id = $5 RETURNING *",
          [user_id, workout_id, sets, reps, dailyworkout_id]
      );

      return res.status(200).json({ success: true, workout: updatedWorkout, message: "Daily workout updated successfully" });
  } catch (error) {
      return res.status(500).json({ success: false, message: "Error updating daily workout: " + error.message });
  }
};

//delete entry
const deleteDailyWorkout = async (req, res) => {
  const { dailyworkout_id } = req.body;

  try {
      const workoutExists = await db.oneOrNone(
          "SELECT * FROM dailyworkouts WHERE dailyworkout_id = $1",
          [dailyworkout_id]
      );

      if (!workoutExists) {
          return res.status(404).json({ success: false, message: "Daily workout not found" });
      }

      await db.none(
          "DELETE FROM dailyworkouts WHERE dailyworkout_id = $1",
          [dailyworkout_id]
      );

      return res.status(200).json({ success: true, message: "Daily workout deleted successfully" });
  } catch (error) {
      return res.status(500).json({ success: false, message: "Error deleting daily workout: " + error.message });
  }
};




module.exports = {
    getDailyWorkouts,
    getDailyWorkoutsbyDate,
    insertWorkout,
    updateDailyWorkout,
    deleteDailyWorkout
};