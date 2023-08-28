const express = require("express");
const userRoute = require("./user.route");
const itemRoute = require("./item.route");
const bidRoute = require("./bid.route");

const router = express.Router();

const defaultRoutes = [
  {
    path: "/users",
    route: userRoute,
  },
  {
    path: "/items",
    route: itemRoute,
  },
  {
    path: "/bids",
    route: bidRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
