const db = require("../database/database");
const bcrypt = require("bcrypt");
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({storage:storage});


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
  try {
    const user = await db.oneOrNone("SELECT * FROM users WHERE user_id = $1", [
      user_id,
    ]);

    if (user) {
      res.status(200).send(user);
    }
  } catch (error) {
    res.status(404).json({ error: "User not found" });
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = req.user.data.user_id;

    await db.none(
      "UPDATE users SET name = $2, email = $3, height = $4, weight = $5 WHERE user_id = $1",
      [userId, req.body.name, req.body.email, req.body.height, req.body.weight]
    );

    const updatedUser = await db.oneOrNone(
      "SELECT * FROM users WHERE user_id = $1",
      [userId]
    );

    res.status(200).json({
      message: "User updated successfully.",
      updatedUser: updatedUser,
    });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: "Failed to update user." });
  }
};

const changePassword = async (req, res) => {
  const userId = req.user.data.user_id;
  const { currentPassword, newPassword, confirmNewPassword } = req.body;
  try {
    const user = await db.oneOrNone("SELECT * FROM users WHERE user_id = $1", [
      userId,
    ]);
    const passwordMatch = await bcrypt.compare(currentPassword, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Incorrect Password!" });
    }
    if (newPassword !== confirmNewPassword) {
      return res.status(401).json({ error: "Passwords don't match!" });
    }
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    await db.none("UPDATE users SET password = $2 WHERE user_id = $1", [
      userId,
      hashedPassword,
    ]);
    res.status(200).json({ message: "Password Changed!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const changePFP = async (req, res) => {
  const userId = req.user.data.user_id;
  try {
    upload(req, res, async (err) => {
      if (err) {
        console.error('Error uploading file:', err);
        return res.status(500).send({ error: 'File upload failed' });
      }

      const file = req.file;
      if (!file) {
        return res.status(400).send({ error: 'No file uploaded' });
      }

      console.log('Uploaded file:', file);

      const buffer = file.buffer;
      const fileData = buffer.toString('base64');
      const user = await db.oneOrNone('SELECT * FROM users WHERE user_id = $1', [userId]);

      if (!user) {
        return res.status(404).send({ error: 'User not found' });
      }

      const imagePath = `data:image/jpeg;base64,${fileData}`;
      console.log('Image path:', imagePath);

      const result = await cloudinary.uploader.upload(imagePath, { folder: 'pfps' });
      console.log('Cloudinary result:', result);

      return res.json({ secure_url: result.secure_url });
    });
  } catch (error) {
    console.error('Error uploading image to Cloudinary:', error.message);
    return res.status(500).send({ error: 'Internal server error' });
  }
};



module.exports = {
  getUsers,
  updateUser,
  getUserByID,
  changePassword,
  changePFP
};
