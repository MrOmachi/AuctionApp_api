const express = require("express");
const helmet = require("helmet");
const xss = require("xss-clean");
const mongoSanitize = require("express-mongo-sanitize");
const cors = require("cors");
const httpStatus = require("http-status");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv").config();
const config = require("../AuctionApp/config/config");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 8000;

connectDB();
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

app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);

app.listen(port, () => console.log(`server running on port ${port}`));
