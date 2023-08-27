const Joi = require("joi");

const createItem = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    price: Joi.number().required(),
    // userid: Joi.string().required(),
  }),
};

module.exports = {
  createItem,
};
