const { Schema, model } = require("mongoose");

const accessorySchema = new Schema({
  brand: String,
  name: String,
  category: String,
  price: Number,
  photos: Array,
});

const Accessory = model("Accessory", accessorySchema, "accessories");

module.exports = {
  Accessory,
};
