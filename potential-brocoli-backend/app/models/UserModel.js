const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  // TODO: add patch method for update user info (shopify shop name?)
  uuid: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  // subscription: {
  //   type: String,
  //   // name of our offers : gratin | terrine | velouté
  //   enum: ["gratin" | "terrine" | "velvety"],
  //   default: "gratin",
  // },
  credentials: [
    {
      shop_name: { type: String },
      shop_password: { type: String },
      shop_apiKey: { type: String },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("user", UserSchema);
