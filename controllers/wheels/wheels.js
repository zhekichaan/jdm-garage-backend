const { Wheel } = require("../../models");

const getWheels = async (req, res) => {
  const { page } = req.query;
  const wheelsList = await Wheel.find()
    .skip((page - 1) * 12)
    .limit(12);
  return res.status(200).json(wheelsList);
};

const getBrand = async (req, res) => {
  const { brand, page } = req.query;
  const brandList = await Wheel.find({ brand: brand })
    .skip((page - 1) * 12)
    .limit(12);
  return res.status(200).json(brandList);
};

const getWheel = async (req, res) => {
  const { _id } = req.params;
  const car = await Wheel.findOne({ _id: _id });
  return res.status(200).json(car);
};

const addWheel = async (req, res) => {
  const { brand, name, price, color, size, photos } = req.body;
  const wheel = {
    brand,
    name,
    price,
    color,
    size,
    photos,
  };

  const addedWheel = await Wheel.create(wheel);
  return res.status(200).json({ message: "added wheel", addedWheel });
};

module.exports = {
  getWheels,
  getBrand,
  getWheel,
  addWheel,
};
