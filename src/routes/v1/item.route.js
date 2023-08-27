const express = require("express");
const itemController = require("../../controllers/item.controller");
const validate = require("../../middleware/validate");
const { itemValidation } = require("../../validations");
const { protect } = require("../../middleware/authMiddleware");

const router = express.Router();

router
  .route("/")
  .post(
    protect,
    validate(itemValidation.createItem),
    itemController.createItem
  );

module.exports = router;
