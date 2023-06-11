const { Wheel } = require("../../models");

const getWheels = async (req, res) => {
  const wheelsList = await Wheel.find();
  console.log(wheelsList);
  return res.status(200).json(wheelsList);
};

const getBrand = async (req, res) => {
  const { brand } = req.params;
  console.log(req.params);
  const brandList = await Wheel.find({ brand: brand });
  return res.status(200).json(brandList);
};

const getWheel = async (req, res) => {
  const { _id } = req.params;
  const car = await Wheel.findOne({ "models._id": _id }, { "models.$": 1 });
  return res.status(200).json(car);
};

const addWheel = async (req, res) => {
  const { brand, name, price, color, size } = req.body;
  const wheel = {
    brand,
    name,
    price,
    color,
    size,
  };

  const addedWheel = await Wheel.findOneAndUpdate(
    { brand: brand },
    { $push: { models: wheel } }
  );
  return res.status(200).json({ message: "added wheel", addedWheel });
};

module.exports = {
  getWheels,
  getBrand,
  getWheel,
  addWheel,
};
