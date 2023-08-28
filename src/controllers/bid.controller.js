const httpStatus = require("http-status");
const { bidService, itemService } = require("../services");
const catchAsync = require("../utils/catchAsync");

const createBid = catchAsync(async (req, res) => {
  const currentBidItem = await itemService.getItemById(req.body.itemId);
  const authenticatedUser = req.user;
  if (authenticatedUser.role !== "admin") {
    return res.status(httpStatus.FORBIDDEN).send("Only admins can start bids");
  }
  const bidData = {
    user: authenticatedUser,
    item: currentBidItem,
  };

  const bid = await bidService.createBid(bidData);

  console.log(bid);
  res.status(httpStatus.CREATED).send(bid);
});

const getBidById = catchAsync(async (req, res) => {
  const currentBid = await bidService.getBidById(req.params.bidId);
  res.status(httpStatus.OK).send(currentBid);
});

module.exports = {
  createBid,
  getBidById,
};
