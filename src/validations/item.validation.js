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

const updateItemById = {
  params: Joi.object().keys({
    itemId: Joi.string().custom(objectId),
  }),
  body: Joi.object().keys({
    name: Joi.string().required(),
    price: Joi.number().required(),
  }),
};

const deleteItemById = {
  params: Joi.object().keys({
    itemId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createItem,
  getItemById,
  updateItemById,
  deleteItemById,
};
