const dotenv = require("dotenv");
const path = require("path");
const Joi = require("joi");

dotenv.config({ path: path.join(__dirname, "../../.env") });

const envVarSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string().valid("production", "development").required(),
    PORT: Joi.number().default(3009),
    CLIENT_URL: Joi.string().allow("").default("localhost:3005"),
    MONGODB_URL: Joi.string().required().description("Mongo DB url"),
    MONGODB_URL_DEV: Joi.string().required().description("Mongo DB dev url"),
  })
  .unknown();

const { value: envVars, error } = envVarSchema
  .prefs({ errors: { label: "key" } })
  .validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  corsOrigin: envVars.NODE_ENV === "production" ? envVars.CLIENT_URL : "*",
  clientURL:
    envVars.NODE_ENV === "production"
      ? envVars.CLIENT_URL
      : "http://localhost:3005",
  mongoose: {
    url:
      envVars.NODE_ENV === "development"
        ? envVars.MONGODB_URL_DEV
        : envVars.MONGODB_URL,
    options: {},
  },
};
