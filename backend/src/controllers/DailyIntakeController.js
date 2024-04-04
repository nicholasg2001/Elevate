const db = require("../database/database");


const insertIntake = async (req, res) => {
    const userId = req.user.data.user_id;
    const {foodID} = req.body;
    const currentDate = new Date();
    try {
        const insertedIntake = await db.one(
            "INSERT INTO dailyIntake(user_id, food_id, date) VALUES($1, $2, $3, $4) RETURNING *",
            [userId, foodID, currentDate]
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
        
        if(intakes.length === 0)
            return res.status(404).json({error : "No intake data found"});

        res.status(200).json(intakes);
    } catch (error) {
        console.error("Intakes Error:", error);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
};

const getIntakeByDate = async (req, res) => {
    const { date } = req.body;
    try {
        const intakes = await db.any("SELECT * FROM dailyIntake WHERE date = $1", [date]);
        if(intakes.length === 0)
            return res.status(404).json({error : "No intake data found"});
        res.status(200).json(intakes);
    } catch (error) {
        console.error("Intakes Error:", error);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
};


module.exports = {
    insertIntake,
    deleteIntake,
    getIntake,
    getIntakeByDate
  };