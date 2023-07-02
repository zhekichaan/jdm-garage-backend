const { Schema, model } = require("mongoose");

const makeSchema = new Schema({
  make: String,
  model: String,
  year: Number,
  price: Number,
  mileage: Number,
  fuel: String,
  transmission: String,
  engine: String,
  accessories: Array,
  photos: Array,
  description: String,
});

const Car = model("Car", makeSchema, "cars");

module.exports = {
  Car,
};
