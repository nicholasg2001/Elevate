const express = require("express");
const DailyWorkoutsController = require("../controllers/DailyWorkoutsController");
const AuthController = require("../controllers/AuthController");
const router = express.Router();



router.get("/", AuthController.authenticateToken, DailyWorkoutsController.getDailyWorkouts);
router.get("/:date", AuthController.authenticateToken,DailyWorkoutsController.getDailyWorkoutsbyDate);
router.post("/", AuthController.authenticateToken,DailyWorkoutsController.insertWorkout);
router.patch("/",AuthController.authenticateToken,DailyWorkoutsController.updateDailyWorkout);
router.delete("/",AuthController.authenticateToken,DailyWorkoutsController.deleteDailyWorkout);


module.exports = router;





