const pgp = require('pg-promise')(); // Import pg-promise and create pgp object
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



const getUserByID = async (req, res) => {
  const user_id = req.params.user_id;
  console.log(user_id);
  try{
      const user = await db.oneOrNone(
          "SELECT * FROM users WHERE user_id = $1",[user_id]);
      
      if(user){
          res.status(200).send(user); 
      }    
  } catch (error) {
    res.status(404).json({ error: "User not found" });
  }
}

const updateUser = async (req, res) => {
  try {
    const userId = req.user.data.user_id;
    console.log(userId);
    
    // Validate req.body here if necessary

    // Perform the update
    const updatedUser = await db.none('UPDATE users SET name = $2, email = $3, password = $4, height = $5, weight = $6 WHERE user_id = $1', [
      userId,
      req.body.name,
      req.body.email,
      req.body.password,
      req.body.height,
      req.body.weight
    ]);

    // Response
    res.status(200).json({ message: "User updated successfully." });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: "Failed to update user." });
  }
};

module.exports = {
  getUsers, updateUser, getUserByID
};