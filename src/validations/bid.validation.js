const Joi = require("joi");
const { objectId } = require("./custom.validation");

const createItem = {
  body: Joi.object().keys({
    itemId: Joi.string().required(),
  }),
};

module.exports = {
  createItem,
};
