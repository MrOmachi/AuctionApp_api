const httpStatus = require("http-status");
const { User, Item } = require("../models");

const createItem = async (item) => {
  const itemBody = {
    name: item.name,
    description: item.description,
    price: item.price,
  };
  const createdItem = await Item.create(itemBody);
  return createdItem;
};

module.exports = { createItem };
