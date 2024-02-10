const express = require("express");
const ExternalApiController = require("../controllers/ExternalApiController");
const router = express.Router();

router.get("/workout/type/:type", ExternalApiController.getWorkoutsType);
router.get("/workout/muscle/:muscle", ExternalApiController.getWorkoutsMuscle);
router.get(
  "/workout/difficulty/:difficulty",
  ExternalApiController.getWorkoutsDifficulty
);

router.get(
  "/workout/:muscle?/:difficulty?",
  ExternalApiController.getWorkoutsWithMuscleAndDifficulty
);
module.exports = router;
