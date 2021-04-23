const mongoose = require("mongoose");

const CustomerSchema = mongoose.Schema({
  // TODO: add patch method for update user info (shopify shop name?)
  customer_id: {
    type: String,
    required: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  sponsorship_code: [
    {
      id: { type: String, required: true },
      price_rule_id: { type: String, required: true },
      code: { type: String, required: true },
      usage_count: { type: Number, required: true },
    },
  ],
  jackpot_code: [
    {
      id: { type: String, required: true },
      price_rule_id: { type: String, required: true },
      code: { type: String, required: true },
      usage_count: { type: Number, required: true },
      amount: { type: Number, required: true },
    },
  ],
  email: {
    type: String,
    required: true,
  },
  shop_name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  order_history: {
    type: Array,
  },
});

module.exports = mongoose.model("customer", CustomerSchema);
