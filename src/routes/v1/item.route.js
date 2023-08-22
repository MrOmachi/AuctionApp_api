const express = require("express");
const itemController = require("../../controllers/item.controller");

const router = express.Router();

router.route("/").post(itemController.createItem);

module.exports = router;
