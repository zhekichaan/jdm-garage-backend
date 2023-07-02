const { Schema, model } = require("mongoose");

const wheelSchema = new Schema({
  brand: String,
  name: String,
  price: Number,
  color: String,
  size: String,
  photos: Array,
});

const Wheel = model("Wheel", wheelSchema, "wheels");

module.exports = {
  Wheel,
};
