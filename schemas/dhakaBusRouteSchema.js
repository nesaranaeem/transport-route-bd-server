const { default: mongoose } = require("mongoose");

// Define bus route schema
const dhakaBusRouteSchema = new mongoose.Schema({
  englishName: String,
  banglaName: String,
  image: String,
  routes: [String],
  time: String,
  service_type: String,
});
module.exports = dhakaBusRouteSchema;
