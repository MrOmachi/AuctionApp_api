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

const updateBidById = {
  params: Joi.object().keys({
    bidId: Joi.string().custom(objectId),
  }),
  body: Joi.object().keys({
    itemId: Joi.string().custom(objectId),
    bidPrice: Joi.number().required(),
  }),
};

module.exports = {
  createItem,
  getBidById,
  updateBidById,
};
