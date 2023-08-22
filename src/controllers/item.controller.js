const httpStatus = require("http-status");
const { itemService } = require("../services");
const catchAsync = require("../utils/catchAsync");

const createItem = catchAsync(async (req, res) => {
  item = await itemService.createItem(req.user, req.body.name);
  res.status(httpStatus.CREATED).send(item);
});

module.exports = {
  createItem,
};
