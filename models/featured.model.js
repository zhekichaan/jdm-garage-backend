const { Schema, model } = require("mongoose");

const featuredSchema = new Schema({
  make: String,
  model: String,
  year: Number,
  price: Number,
  mileage: Number,
  fuel: String,
  transmission: String,
  location: String,
  accessories: Array,
});

const Featured = model("Featured", featuredSchema, "featured");

module.exports = {
  Featured,
};
