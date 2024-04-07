const db = require("../database/database");


const insertFood = async (req, res) => {
    const userId = req.user.data.user_id;
    const {foodID} = req.body;
    const currentDate = new Date();
    try {
        const insertedFood = await db.one(
            "INSERT INTO dailyFood(user_id, food_id, date) VALUES($1, $2, $3) RETURNING *",
            [userId, foodID, currentDate]
        );
        res.status(200).send(insertedFood);
    } catch (error) {
        res.status(500).json({ error : "Error inserting workout into the database: " + error.message });
    }
};

const deleteFood = async (req, res) => {
    const { foodID } = req.body;

    try {
        const foodExists = await db.oneOrNone(
            "SELECT * FROM dailyfood WHERE daily_intake_id = $1",
            [foodID]
        );

        if (!foodExists) {
            res.status(404).json({ error : "Food not found" });
        }

        await db.none(
            "DELETE FROM dailyfood WHERE daily_food_id = $1",
            [foodID]
        );

        res.status(200).send(intakeExists);
    } catch (error) {
        res.status(500).json({ error : "Error deleting daily foodß: " + error.message });
    }
};

const getFood = async (req, res) => {
    try {
        const foods = await db.any("SELECT * FROM dailyfood");
        
        if(foods.length === 0)
            return res.status(404).json({error : "No food data found"});

        res.status(200).json(foods);
    } catch (error) {
        console.error("foods Error:", error);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
};

const getFoodByDate = async (req, res) => {
    const { date } = req.body;
    try {
        const foods = await db.any("SELECT * FROM dailyfood WHERE date = $1", [date]);
        if(foods.length === 0)
            return res.status(404).json({error : "No food data found"});
        res.status(200).json(foods);
    } catch (error) {
        console.error("foods Error:", error);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
};


module.exports = {
    insertFood,
    deleteFood,
    getFood,
    getFoodByDate
  };