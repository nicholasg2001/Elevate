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
    const { workout_id, sets, reps } = req.body;
    const currentDate = new Date();
    try {
        const insertedWorkout = await db.one(
            "INSERT INTO dailyworkouts(user_id, workout_id, sets, reps, date) VALUES($1, $2, $3, $4, $5 ) RETURNING *",
            [userId, workout_id, sets, reps, currentDate]
        );
        res.status(200).send(insertedWorkout);
    } catch (error) {
        res.status(500).json({ error : "Error inserting workout into the database: " + error.message });
    }
};



const updateDailyWorkout = async (req, res) => {
    const { dailyworkout_id, sets, reps } = req.body; // Removed user_id and workout_id
    try {
        const workoutExists = await db.oneOrNone(
            "SELECT * FROM dailyworkouts WHERE dailyworkout_id = $1",
            [dailyworkout_id]
        );

        if (!workoutExists) {
            return res.status(404).json({ error : "Daily workout not found" });
        }

        const updatedWorkout = await db.one(
            "UPDATE dailyworkouts SET sets = $1, reps = $2 WHERE dailyworkout_id = $3 RETURNING *",
            [sets, reps, dailyworkout_id]
        );

        res.status(200).send(updatedWorkout);
    } catch (error) {
        res.status(500).json({ error : "Error updating daily workout: " + error.message });
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
            res.status(404).json({ error : "Daily workout not found" });
        }

        await db.none(
            "DELETE FROM dailyworkouts WHERE dailyworkout_id = $1",
            [dailyworkout_id]
        );

        res.status(200).send(workoutExists);
    } catch (error) {
        res.status(500).json({ error : "Error deleting daily workout: " + error.message });
    }
};




module.exports = {
    getDailyWorkouts,
    getDailyWorkoutsbyDate,
    insertWorkout,
    updateDailyWorkout,
    deleteDailyWorkout
};