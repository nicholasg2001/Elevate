const express = require("express");
const UserController = require("../controllers/UserController");
const AuthController = require("../controllers/AuthController");
const router = express.Router();

router.get("/", AuthController.authenticateToken, UserController.getUsers);
router.get("/:user_id", UserController.getUserByID);
router.patch("/", AuthController.authenticateToken, UserController.updateUser);
router.post(
  "/changePassword",
  AuthController.authenticateToken,
  UserController.changePassword
);
module.exports = router;
