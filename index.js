// Import required modules
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const dhakaBusRouteSchema = require("./schemas/dhakaBusRouteSchema");
const DhakaBusRoute = require("./models/DhakaBusRoute");

// Load environment variables
dotenv.config();

// Create Express app
const app = express();
//MiddleWares
app.use(express.json());
app.use(cors());
//routes
const dhakaCityBusRoute = require("./routes/dhakaBusRoute.route");
// Connect to MongoDB database
mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to database"))
  .catch((err) => console.error("Failed to connect to database", err));

// Define bus route schema
dhakaBusRouteSchema;

// Define bus route model
DhakaBusRoute;

// Define endpoint for getting all bus routes
app.use("/api/v1/bus", dhakaCityBusRoute);

// Start server
app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
