const httpStatus = require("http-status");
const { User, Item } = require("../models");

const createItem = async (user, item) => {
  const itemBody = {
    name: item.name,
    description: item.description,
    price: item.price,
    users: [
      {
        id: user.id,
        name: user.name,
      },
    ],
  };
  const createdItem = await Item.create(itemBody);
  return createItem;
};

module.exports = { createItem };
