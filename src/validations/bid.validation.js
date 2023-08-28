const Joi = require("joi");
const { objectId } = require("./custom.validation");

const createItem = {
  body: Joi.object().keys({
    itemId: Joi.string().required(),
  }),
};

const getBidById = {
  params: Joi.object().keys({
    bidId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createItem,
  getBidById,
};
