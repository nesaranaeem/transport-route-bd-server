const whiteListedDomain = (req, res, next) => {
  const allowedDomains = [
    "https://transport-route-bd-client.vercel.app",
    "http://transport-route-bd-client.vercel.app",
    // "http://localhost:3000",
  ];

  // check if the request origin matches one of the allowed domains
  if (allowedDomains.includes(req.headers.origin)) {
    res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, PATCH, DELETE"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );
    next();
  } else {
    res
      .status(403)
      .json({ message: "Ohhh! You're not permitted to access the api :(" });
  }
};

module.exports = whiteListedDomain;
