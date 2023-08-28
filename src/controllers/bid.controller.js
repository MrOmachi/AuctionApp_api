const httpStatus = require("http-status");
const { bidService } = require("../services");
const catchAsync = require("../utils/catchAsync");

const createBid = catchAsync(async (req, res) => {
  const bidItem = req.body;
  const authenticatedUser = req.user;
  if (authenticatedUser.role !== "admin") {
    return res.status(httpStatus.FORBIDDEN).send("Only admins can start bids");
  }

  const bid = await bidService.createBid(authenticatedUser.name, bidItem);
  res.status(httpStatus.CREATED).send(bid);
});

module.exports = {
  createBid,
};
