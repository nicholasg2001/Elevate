const db = require("../database/database");
const getUsers = async (req, res) => {
  try {
    const users = await db.any("SELECT * FROM users");
    res.status(200).json(users);
  } catch (error) {
    console.error("Error retrieving users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getUsers,
};
