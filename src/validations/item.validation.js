const Joi = require("joi");

const createItem = {
  body: Joi.object().keys({
    name: Joi.string.required(),
    price: Joi.number.required(),
  }),
};

module.exports = {
  createItem,
};
