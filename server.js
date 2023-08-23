const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const xss = require("xss-clean");
const mongoSanitize = require("express-mongo-sanitize");
const cors = require("cors");
const httpStatus = require("http-status");
const cookieParser = require("cookie-parser");
const config = require("./src/config/config");
const { errorHandler } = require("./src/middleware/errorMiddleware");
const routes = require("./src/routes/v1");

// const connectDB = require("./config/db");

// connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// set security HTTP headers
app.use(helmet());
// parse json request body
app.use(express.json());
// sanitize request data
app.use(xss());
app.use(mongoSanitize());
// parse cookies
app.use(cookieParser());
// enable cors

const corsConfig = {
  origin: config.corsOrigin,
  credentials: true,
  allowedHeaders: "Origin,X-Requested-With,Content-Type,Accept,Authorization",
};
app.use(cors(corsConfig));
app.options("*", cors(corsConfig));

// v1 api routes
app.use("/api/v1", routes);

app.use(errorHandler);

mongoose.connect(config.mongoose.url, config.mongoose.options).then(() => {
  app.listen(config.port, () =>
    console.log(`server running on port ${config.port}`)
  );
});