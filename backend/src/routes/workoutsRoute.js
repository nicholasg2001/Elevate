const express = require("express");
const WorkoutsController = require("../controllers/WorkoutsController");
const AuthController = require("../controllers/AuthController");
const router = express.Router();

router.get(
  "/",
  AuthController.authenticateToken,
  WorkoutsController.getAllWorkouts
);
router.get(
  "/:name",
  AuthController.authenticateToken,
  WorkoutsController.getWorkoutByName
);
router.get(
  "/muscle/:muscle",
  AuthController.authenticateToken,
  WorkoutsController.getWorkoutsByMuscle
);
router.get(
  "/type/:type",
  AuthController.authenticateToken,
  WorkoutsController.getWorkoutsByType
);
router.get(
  "/difficulty/:difficulty",
  AuthController.authenticateToken,
  WorkoutsController.getWorkoutsByDifficulty
);

module.exports = router;
