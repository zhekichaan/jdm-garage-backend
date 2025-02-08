// const { nanoid } = require("nanoid");
const { Car } = require("../../models");

const getCars = async (req, res) => {
  const { page } = req.query;
  const carsList = await Car.find()
    .skip((page - 1) * 6)
    .limit(6);
  return res.status(200).json(carsList);
};

const getMake = async (req, res) => {
  const { make, page } = req.query;
  const makeList = await Car.find({ make: make })
    .skip((page - 1) * 6)
    .limit(6);
  return res.status(200).json(makeList);
};

const getFeatured = async (req, res) => {
  const featuredList = await Car.find().limit(8);
  return res.status(200).json(featuredList);
};

const getCar = async (req, res) => {
  const { _id } = req.params;
  console.log(_id);
  const car = await Car.findOne({ _id: _id });
  console.log(car);
  return res.status(200).json(car);
};

const addCar = async (req, res) => {
  const {
    make,
    model,
    year,
    price,
    mileage,
    capacity,
    transmission,
    engine,
    engineType,
    drive,
    photos,
    description,
  } = req.body;
  const car = {
    make,
    model,
    year,
    price,
    mileage,
    capacity,
    transmission,
    engine,
    engineType,
    drive,
    photos,
    description,
  };

  console.log(car);

  const addedCar = await Car.create(car);
  return res.status(200).json({ message: "added car", addedCar });
};

module.exports = {
  getCars,
  getMake,
  getFeatured,
  getCar,
  addCar,
};
