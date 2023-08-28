const httpStatus = require("http-status");
const { Bid } = require("../models");
const ApiError = require("../utils/ApiError");
const { getItemById } = require("./item.service");

const createBid = async (data) => {
  const createBid = await Bid.create(data);
  return createBid;
};

const getBidById = async (bidId) => {
  return await Bid.findById(bidId);
};

const updateBidById = async (bidId, bidData) => {
  const currentBid = await getBidById(bidId);
  if (!currentBid) {
    throw new ApiError(httpStatus.NOT_FOUND, "Bid item does not exist");
  }
  console.log(currentBid);
  const currentItem = await getItemById(bidData.itemId);
  if (!currentItem) {
    throw new ApiError(httpStatus.NOT_FOUND, "Item not found");
  }
  const currentDate = new Date();
  const timeDifference = currBid.countdown - currentDate;
  if (timeDifference <= 0) {
    throw new ApiError(httpStatus.NOT_MODIFIED, "Bid ended");
  }
  const timeDifferenceInSeconds = Math.floor(timeDifference / 1000);

  if (timeDifferenceInSeconds >= 1 && timeDifferenceInSeconds <= 5) {
    const extendedCountdown = new Date(currBid.countdown.getTime() + 5000);
    currBid.countdown = extendedCountdown;
  }

  console.log(currentItem);
  console.log(bidData.bidPrice);
};

module.exports = {
  createBid,
  getBidById,
  updateBidById,
};
