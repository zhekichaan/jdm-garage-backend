const { Schema, model } = require("mongoose");

const makeSchema = new Schema({
  make: String,
  models: [
    {
      id: String,
      model: String,
      year: Number,
      price: Number,
      mileage: Number,
      fuel: String,
      transmission: String,
      accessories: Array,
    },
  ],
});

const Car = model("Car", makeSchema, "cars");

module.exports = {
  Car,
};
