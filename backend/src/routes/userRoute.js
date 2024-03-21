const express = require("express");
const UserController = require("../controllers/UserController");
const AuthController = require("../controllers/AuthController");
const multer = require("multer");

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get("/", AuthController.authenticateToken, UserController.getUsers);
router.get("/:user_id", UserController.getUserByID);
router.patch("/", AuthController.authenticateToken, UserController.updateUser);
router.post(
  "/changePassword",
  AuthController.authenticateToken,
  UserController.changePassword
);
router.patch(
  "/pfp",
  AuthController.authenticateToken,
  upload.single("profileurl"),
  UserController.changePFP
);
module.exports = router;
