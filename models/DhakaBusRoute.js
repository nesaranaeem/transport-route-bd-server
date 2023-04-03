const { default: mongoose } = require("mongoose");
const dhakaBusRouteSchema = require("../schemas/dhakaBusRouteSchema");

const DhakaBusRoute = mongoose.model(
  "DhakaBusRoute",
  dhakaBusRouteSchema,
  "dhakacitybusroutes"
);
module.exports = DhakaBusRoute;
