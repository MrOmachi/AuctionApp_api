const httpStatus = require("http-status");
const { itemService } = require("../services");
const catchAsync = require("../utils/catchAsync");
const ApiError = require("../utils/ApiError");

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

const getItemById = catchAsync(async (req, res) => {
  const itemById = await itemService.getItemById(req.params.itemId);
  res.status(httpStatus.OK).send(itemById);
});

const getAllItems = catchAsync(async (req, res) => {
  const items = await itemService.getAllItems();
  res.status(httpStatus.OK).send(items);
});

const updateItemById = catchAsync(async (req, res) => {
  const itemOld = await itemService.getItemById(req.params.itemId);
  const name = req.body.name || itemOld.name;
  const price = req.body.price || itemOld.price;

  const item = await itemService.updateItemById(req.params.itemId, {
    name,
    price,
  });
  res.status(httpStatus.NO_CONTENT).send(item);
});

const deleteItemById = catchAsync(async (req, res) => {
  const item = await itemService.deleteItemById(req.params.itemId);
  res.status(httpStatus.NO_CONTENT).send(item);
});

module.exports = {
  createItem,
  getItemById,
  getAllItems,
  updateItemById,
  deleteItemById,
};
