const express = require("express");
const WorkoutsController = require("../controllers/WorkoutsController");
const router = express.Router();

router.get("/", WorkoutsController.getTopWorkouts);
router.get("/:name", WorkoutsController.getWorkoutByName);
router.get("/muscle/:muscle", WorkoutsController.getWorkoutsByMuscle);
router.get("/type/:type", WorkoutsController.getWorkoutsByType);
router.get("/difficulty/:difficulty", WorkoutsController.getWorkoutsByDifficulty);



module.exports = router;
