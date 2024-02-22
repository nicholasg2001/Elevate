const pgp = require('pg-promise')();
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
    console.log(dailyworkouts_id);
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
module.exports = {
    getDailyWorkouts,
    getDailyWorkoutsbyDate
};