const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const cookieParser = require("cookie-parser");

const API_MONGOOSE_URL = process.env.API_MONGOOSE_URL;

mongoose.connect(API_MONGOOSE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

let db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection failed"));

db.once("open", function () {
  console.log("Connection is ok ;)");
});

const { handleError } = require("./app/middlewares/error");
const router = require("./app/router/router");

const app = express();

const corsOptions = {
  credentials: true,
};

app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

app.use(cookieParser());

app.use(router);

app.use((err, res) => {
  handleError(err, res);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
