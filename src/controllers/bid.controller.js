const httpStatus = require("http-status");
const { bidService, itemService } = require("../services");
const catchAsync = require("../utils/catchAsync");
const ApiError = require("../utils/ApiError");

const createBid = catchAsync(async (req, res) => {
  const currentBidItem = await itemService.getItemById(req.body.itemId);
  if (currentBidItem.active === true) {
    throw new ApiError(httpStatus.NOT_ACCEPTABLE, "Bid is currently active");
  }
  const authenticatedUser = req.user;
  if (authenticatedUser.role !== "admin") {
    return res.status(httpStatus.FORBIDDEN).send("Only admins can start bids");
  }
  currentBidItem.active = true;
  await currentBidItem.save();
  const bidData = {
    user: authenticatedUser,
    item: currentBidItem,
  };

  const bid = await bidService.createBid(bidData);

  res.status(httpStatus.CREATED).send(bid);
});

const joinBid = catchAsync(async (req, res) => {
  const currentBidItem = await itemService.getItemById(req.body.itemId);
  const authenticatedUser = req.user;
  if (authenticatedUser.role !== "user") {
    return res.status(httpStatus.FORBIDDEN).send("Users can join active bids");
  }
});

const getBidById = catchAsync(async (req, res) => {
  const currentBid = await bidService.getBidById(req.params.bidId);
  res.status(httpStatus.OK).send(currentBid);
});

const updateBidById = catchAsync(async (req, res) => {
  const data = await itemService.getItemById(req.body);
  const bid = await bidService.updateBidById(req.params.bidId, {
    data,
  });
  // res.status(httpStatus.NO_CONTENT).send(item);
});

module.exports = {
  createBid,
  getBidById,
  updateBidById,
};
