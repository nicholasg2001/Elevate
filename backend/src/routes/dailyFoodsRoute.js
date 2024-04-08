const express = require("express");
const DailyFoodsController = require("../controllers/DailyFoodsController");
const AuthController = require("../controllers/AuthController");
const router = express.Router();

router.post(
  "/",
  AuthController.authenticateToken,
  DailyFoodsController.insertFood
);
router.delete(
  "/",
  AuthController.authenticateToken,
  DailyFoodsController.deleteFood
);
router.get("/", AuthController.authenticateToken, DailyFoodsController.getFood);
router.get("/date", DailyFoodsController.getFoodByDate);

module.exports = router;
