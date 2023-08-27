const httpStatus = require("http-status");
const { itemService } = require("../services");
const catchAsync = require("../utils/catchAsync");

const createItem = catchAsync(async (req, res) => {
  const authenticatedUser = req.user;
  if (authenticatedUser.role !== "admin") {
    return res
      .status(httpStatus.FORBIDDEN)
      .send("Only admins can create items.");
  }
  const item = await itemService.createItem(req.body);
  res.status(httpStatus.CREATED).send(item);
});

module.exports = {
  createItem,
};
