const express = require("express");
const FavoriteWorkoutsController = require("../controllers/FavoriteWorkoutsController");
const router = express.Router();
const AuthController = require("../controllers/AuthController");


router.get('/', AuthController.authenticateToken,FavoriteWorkoutsController.getFavoriteWorkouts);
router.post('/',AuthController.authenticateToken,FavoriteWorkoutsController.addToFavorites);
router.delete('/',AuthController.authenticateToken,FavoriteWorkoutsController.removeFromFavorites);

module.exports = router;
