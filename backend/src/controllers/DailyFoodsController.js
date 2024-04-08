const db = require("../database/database");

const insertFood = async (req, res) => {
  const userId = req.user.data.user_id;
  const { food_id, name, calories, fat, carbs, protein } = req.body;
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 1);
  const adjustedDate = currentDate.toISOString();
  try {
    const insertedFood = await db.one(
      "INSERT INTO dailyFood(user_id, name, food_id, calories, fat, carbs, protein, date) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [
        userId,
        name,
        food_id,
        calories,
        `${Number(fat?.quantity ?? 0).toFixed(2)} ${fat?.unit ?? "g"}`,
        `${Number(carbs?.quantity ?? 0).toFixed(2)} ${carbs?.unit ?? "g"}`,
        `${Number(protein?.quantity ?? 0).toFixed(2)} ${protein?.unit ?? "g"}`,
        adjustedDate,
      ]
    );
    res.status(200).send(insertedFood);
  } catch (error) {
    res.status(500).json({
      error:
        `Error inserting food ID: ${food_id}+  into the database: ` +
        error.message,
    });
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
      res.status(404).json({ error: "Food not found" });
    }

    await db.none("DELETE FROM dailyfood WHERE daily_food_id = $1", [foodID]);

    res.status(200).send(intakeExists);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error deleting daily food: " + error.message });
  }
};

const getFood = async (req, res) => {
  try {
    const foods = await db.any("SELECT * FROM dailyfood");

    if (foods.length === 0)
      return res.status(404).json({ error: "No food data found" });

    res.status(200).json(foods);
  } catch (error) {
    console.error("foods Error:", error);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

const getFoodByDate = async (req, res) => {
  const { date } = req.body;
  try {
    const foods = await db.any("SELECT * FROM dailyfood WHERE date = $1", [
      date,
    ]);
    if (foods.length === 0)
      return res.status(404).json({ error: "No food data found" });
    res.status(200).json(foods);
  } catch (error) {
    console.error("foods Error:", error);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

module.exports = {
  insertFood,
  deleteFood,
  getFood,
  getFoodByDate,
};
