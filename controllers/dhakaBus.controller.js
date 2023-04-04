const DhakaBusRoute = require("../models/DhakaBusRoute");

const getDhakaCityBusRoute = async (req, res) => {
  // Get page and limit from query params, default to 1 and 10 respectively
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  // Calculate skip based on page and limit
  const skip = (page - 1) * limit;
  // Get from and to parameters from query string
  const from = req.query.from;
  const to = req.query.to;

  // Create filter object based on from and to parameters
  const filter = {};
  if (from && to) {
    filter.routes = { $all: [from, to] };
  } else if (from) {
    filter.routes = from;
  } else if (to) {
    filter.routes = to;
  }
  // Get total count of bus routes
  const totalCount = await DhakaBusRoute.countDocuments(filter);

  // Get bus routes for current page and limit
  const dhakaBusRoutes = await DhakaBusRoute.find(filter)
    .skip(skip)
    .limit(limit);

  // Calculate total number of pages
  const totalPages = Math.ceil(totalCount / limit);

  // Send response with bus routes, total count, total pages, and current page
  res.json({
    status: true,
    data: dhakaBusRoutes,
    total_count: totalCount,
    total_pages: totalPages,
    current_page: page,
  });
};

const getAllDhakaCityBusRoutes = async (req, res) => {
  try {
    const allRoutes = await DhakaBusRoute.distinct("routes");
    const formattedRoutes = allRoutes.map((route) => ({ routeName: route }));
    res.json(formattedRoutes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
module.exports = {
  getDhakaCityBusRoute,
  getAllDhakaCityBusRoutes,
};
