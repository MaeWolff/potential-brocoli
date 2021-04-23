const express = require("express");
const router = express.Router();

require("./routes/welcomeRoute")(router);
require("./routes/customerRoutes")(router);
require("./routes/authRoutes")(router);
require("./routes/userRoutes")(router);

module.exports = router;
