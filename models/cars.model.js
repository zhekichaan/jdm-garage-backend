const { Schema, model } = require("mongoose");

const makeSchema = new Schema({
  make: String,
  models: [
    {
      model: String,
      year: Number,
      price: Number,
      mileage: Number,
      fuel: String,
      transmission: String,
      location: String,
      accessories: Array,
    },
  ],
});

const Car = model("Car", makeSchema, "cars");

module.exports = {
  Car,
};