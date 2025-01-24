const { Schema, model } = require("mongoose");

const wheelSchema = new Schema({
  brand: String,
  name: String,
  price: Number,
  colors: Array,
  size: String,
  sizes: Array,
  photos: Array,
});

const Wheel = model("Wheel", wheelSchema, "wheels");

module.exports = {
  Wheel,
};
