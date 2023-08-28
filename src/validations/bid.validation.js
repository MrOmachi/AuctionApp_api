const Joi = require("joi");
const { objectId } = require("./custom.validation");

const createItem = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    itemName: Joi.string().required(),
    price: Joi.number().required(),
  }),
};

module.exports = {
  createItem,
};
