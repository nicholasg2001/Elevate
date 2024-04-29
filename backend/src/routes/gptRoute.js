const express = require("express");
const router = express.Router();
const GPTController = require('../controllers/GPTController');

router.post('/sendMessage', GPTController.getGPTResponse)

module.exports = router;
