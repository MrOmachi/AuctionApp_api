const express = require("express");
const itemController = require("../../controllers/item.controller");
const validate = require("../../middleware/validate");
const { itemValidation } = require("../../validations");

const router = express.Router();

router
  .route("/")
  .post(validate(itemValidation.createItem), itemController.createItem);

module.exports = router;
