const httpStatus = require("http-status");
const { Item } = require("../models");

const createItem = async (item) => {
  const itemBody = {
    name: item.name,
    description: item.description,
    price: item.price,
  };
  const createdItem = await Item.create(itemBody);
  return createdItem;
};

const getItemById = async (id) => {
  return await Item.findById(id);
};

const getAllItems = async () => {
  return await Item.find();
};

module.exports = { createItem, getItemById, getAllItems };
