const httpStatus = require("http-status");
const { Bid } = require("../models");
const ApiError = require("../utils/ApiError");

const createBid = async (data) => {
  const createBid = await Bid.create(data);
  return createBid;
};

module.exports = {
  createBid,
};
