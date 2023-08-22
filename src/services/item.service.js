const httpStatus = require("http-status");
const { User, Item } = require("../models");

const createItem = async (item) => {
  const itemBody = {
    name: item.name,
    description: item.description,
    price: item.price,
    // user: [
    //   {
    //     id: user.id,
    //     name: user.name,
    //   },
    // ],
  };
  const createdItem = await Item.create(itemBody);
  return createdItem;
};

module.exports = { createItem };
