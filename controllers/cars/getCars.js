const { Car } = require("../../models");

const getCars = async (req, res) => {
  const carsList = await Car.find();
  console.log(carsList);
  return res.status(200).json({ status: "success", code: 200, carsList });
};

module.exports = {
  getCars,
};
