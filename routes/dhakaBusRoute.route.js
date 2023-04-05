const express = require("express");
const router = express.Router();
const dhakaCityBusController = require("../controllers/dhakaBus.controller");
const whiteListedDomain = require("../middleware/whiteListedDomain");

router.get("/", whiteListedDomain, dhakaCityBusController.getDhakaCityBusRoute);
router.get(
  "/allRoutes",
  whiteListedDomain,
  dhakaCityBusController.getAllDhakaCityBusRoutes
);
module.exports = router;
