const { Schema, model } = require("mongoose");

const makeSchema = new Schema({
  make: String,
  model: String,
  year: Number,
  price: Number,
  mileage: Number,
  capacity: String,
  transmission: String,
  engine: String,
  engineType: String,
  drive: String,
  photos: Array,
  description: String,
});

const Car = model("Car", makeSchema, "cars");

module.exports = {
  Car,
};
