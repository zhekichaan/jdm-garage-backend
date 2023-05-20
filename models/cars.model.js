const { Schema, model } = require("mongoose");

const carSchema = new Schema({
  make: String,
  model: String,
  year: Number,
  price: Number,
  mileage: Number,
  fuel: String,
  transmission: String,
  accessories: Array,
});

const Car = model("Car", carSchema, "cars");

module.exports = {
  Car,
};
