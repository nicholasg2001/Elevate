const express = require("express");
const UserController = require("../controllers/UserController");
const AuthController = require("../controllers/AuthController");
const router = express.Router();

router.get("/", AuthController.authenticateToken, UserController.getUsers);

module.exports = router;
