const express = require("express");
const bidController = require("../../controllers/bid.controller");
const validate = require("../../middleware/validate");
const { protect } = require("../../middleware/authMiddleware");
const { bidValidation } = require("../../validations");

const router = express.Router();

router
  .route("/")
  .post(protect, validate(bidValidation.createItem), bidController.createBid);

module.exports = router;
