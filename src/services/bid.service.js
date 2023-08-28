const httpStatus = require("http-status");
const { Bid } = require("../models");
const ApiError = require("../utils/ApiError");

const createBid = async (user, item, time) => {
  const userBody = {
    name: user.name,
  };
  const itemBody = {
    itemName: item.name,
    price: item.price,
  };
  const countdown = time;

  const createBid = await Bid.create(userBody, itemBody, countdown);
  return createBid;
};
