const { Schema, model } = require("mongoose");

const wheelSchema = new Schema({
  brand: String,
  models: [
    {
      name: String,
      price: Number,
      color: String,
      size: String,
    },
  ],
});

const Wheel = model("Wheel", wheelSchema, "wheels");

module.exports = {
  Wheel,
};
