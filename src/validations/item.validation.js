const Joi = require("joi");
const { objectId } = require("./custom.validation");

const createItem = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    price: Joi.number().required(),
  }),
};

const getItemById = {
  params: Joi.object().keys({
    itemId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createItem,
  getItemById,
};
