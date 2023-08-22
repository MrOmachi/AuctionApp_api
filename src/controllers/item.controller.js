const httpStatus = require("http-status");
const { itemService } = require("../services");
const catchAsync = require("../utils/catchAsync");

const createItem = catchAsync(async (req, res) => {
  console.log(req.body);
  item = await itemService.createItem(req.body);
  res.status(httpStatus.CREATED).send(item);
});

module.exports = {
  createItem,
};
