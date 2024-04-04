const express = require("express");
const DailyIntakeController = require("../controllers/DailyIntakeController");
const AuthController = require("../controllers/AuthController");
const router = express.Router();

router.post("/", AuthController.authenticateToken,DailyIntakeController.insertIntake);
router.delete("/", AuthController.authenticateToken,DailyIntakeController.deleteIntake);
router.get("/", AuthController.authenticateToken,DailyIntakeController.getIntake);
router.get("/:user_id", DailyIntakeController.getIntakeByDate);
module.exports = router;