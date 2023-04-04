const express = require("express");
const router = express.Router();
const dhakaCityBusController = require("../controllers/dhakaBus.controller");

router.route("/").get(dhakaCityBusController.getDhakaCityBusRoute);
router.route("/allRoutes").get(dhakaCityBusController.getAllDhakaCityBusRoutes);
module.exports = router;
