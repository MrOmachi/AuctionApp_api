const httpStatus = require("http-status");
const { Item } = require("../models");
const ApiError = require("../utils/ApiError");

const createItem = async (item) => {
  const itemBody = {
    name: item.name,
    description: item.description,
    price: item.price,
  };
  const createdItem = await Item.create(itemBody);
  return createdItem;
};

const getItemById = async (itemId) => {
  return await Item.findById(itemId);
};

const getAllItems = async () => {
  return await Item.find();
};

const updateItemById = async (itemId, updateBody) => {
  const item = await getItemById(itemId);
  if (!item) {
    throw new ApiError(httpStatus.NOT_FOUND, "Item not found");
  }
  Object.assign(item, updateBody);
  await item.save();
  return item;
};

const deleteItemById = async (itemId) => {
  const item = await getItemById(itemId);
  if (!item) {
    throw new ApiError(httpStatus.NOT_FOUND, "Item not found");
  }
  await item.remove();
  return item;
};

module.exports = {
  createItem,
  getItemById,
  getAllItems,
  updateItemById,
  deleteItemById,
};
