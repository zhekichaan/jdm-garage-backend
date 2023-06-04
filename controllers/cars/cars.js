// const { nanoid } = require("nanoid");
const { Car, Featured } = require("../../models");

const getCars = async (req, res) => {
  const carsList = await Car.find();
  console.log(carsList);
  return res.status(200).json(carsList);
};

const getMake = async (req, res) => {
  const { make } = req.params;
  const makeList = await Car.find({ make: make });
  return res.status(200).json(makeList);
};

const getFeatured = async (req, res) => {
  const featuredList = await Featured.find();
  return res.status(200).json(featuredList);
};

const getCar = async (req, res) => {
  const { _id } = req.params;
  console.log(_id);
  const car = await Car.findOne({ "models._id": _id }, { "models.$": 1 });
  console.log(car);
  if (!car) {
    const featured = await Featured.findOne({ _id: _id });
    return res.status(200).json(featured);
  }
  return res.status(200).json(car);
};

const addCar = async (req, res) => {
  const {
    make,
    model,
    year,
    location,
    price,
    mileage,
    fuel,
    transmission,
    accessories,
  } = req.body;
  const car = {
    model,
    year,
    price,
    mileage,
    fuel,
    transmission,
    location,
    accessories,
  };

  console.log(car);

  const addedCar = await Car.findOneAndUpdate(
    { make: make },
    { $push: { models: car } }
  );
  return res.status(200).json({ message: "added car", addedCar });
};

module.exports = {
  getCars,
  getMake,
  getFeatured,
  getCar,
  addCar,
};
