const { Car } = require("../../models");

const getCars = async (req, res) => {
  const carsList = await Car.find();
  console.log(carsList);
  return res.status(200).json({ status: "success", code: 200, carsList });
};

const getMake = async (req, res) => {
  const { make } = req.body;
  const makeList = await Car.find({ make: make });
  return res.status(200).json({ status: "success", code: 200, makeList });
};

module.exports = {
  getCars,
  getMake,
};
