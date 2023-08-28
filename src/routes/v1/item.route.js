const express = require("express");
const itemController = require("../../controllers/item.controller");
const validate = require("../../middleware/validate");
const { itemValidation } = require("../../validations");
const { protect } = require("../../middleware/authMiddleware");

const router = express.Router();

router
  .route("/")
  .post(protect, validate(itemValidation.createItem), itemController.createItem)
  .get(protect, itemController.getAllItems);

router
  .route("/:itemId")
  .get(
    protect,
    validate(itemValidation.getItemById),
    itemController.getItemById
  )
  .patch(
    protect,
    validate(itemValidation.updateItemById),
    itemController.updateItemById
  )
  .delete(
    protect,
    validate(itemValidation.deleteItemById),
    itemController.deleteItemById
  );

module.exports = router;
