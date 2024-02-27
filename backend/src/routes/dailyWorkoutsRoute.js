const express = require("express");
const DailyWorkoutsController = require("../controllers/DailyWorkoutsController");
const AuthController = require("../controllers/AuthController");
const router = express.Router();



router.get("/", AuthController.authenticateToken, DailyWorkoutsController.getDailyWorkouts);
router.get("/:date", DailyWorkoutsController.getDailyWorkoutsbyDate);


module.exports = router;





