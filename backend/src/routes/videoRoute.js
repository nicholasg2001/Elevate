const express = require("express");
const VideoController = require("../controllers/VideoController") 
const router = express.Router();

router.get("/:name", VideoController.findWorkout);

module.exports = router;