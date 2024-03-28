const db = require("../database/database");


const insertIntake = async (req, res) => {
    const userId = req.user.data.user_id;
    const {intakeID, foodID} = req.body;
    const currentDate = new Date();
    try {
        const insertedIntake = await db.one(
            "INSERT INTO dailyIntake(daily_intake_id, user_id, food_id, date) VALUES($1, $2, $3, $4) RETURNING *",
            [intakeID, userId, foodID, currentDate]
        );
        res.status(200).send(insertedIntake);
    } catch (error) {
        res.status(500).json({ error : "Error inserting workout into the database: " + error.message });
    }
};

const deleteIntake = async (req, res) => {
    const { intakeID } = req.body;

    try {
        const intakeExists = await db.oneOrNone(
            "SELECT * FROM dailyIntake WHERE daily_intake_id = $1",
            [intakeID]
        );

        if (!intakeExists) {
            res.status(404).json({ error : "Daily workout not found" });
        }

        await db.none(
            "DELETE FROM dailyIntake WHERE daily_intake_id = $1",
            [intakeID]
        );

        res.status(200).send(intakeExists);
    } catch (error) {
        res.status(500).json({ error : "Error deleting daily workout: " + error.message });
    }
};

const getIntake = async (req, res) => {
    try {
        const intakes = await db.any("SELECT * FROM dailyIntake");
        res.status(200).json(intakes);
    } catch (error) {
        console.error("Intakes Error:", error);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
};

/*const getIntakeByUserID = async (req, res) => {
    const userId = req.params.user_id;
    try {
        const intakes = await db.any("SELECT * FROM dailyIntake WHERE user_id = $1", [userId]);
        res.status(200).json(intakes);
    } catch (error) {
        console.error("Intakes Error:", error);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
};
doesnt work right now, will ask for help
*/


module.exports = {
    insertIntake,
    deleteIntake,
    getIntake
    //getIntakeByUserID
  };