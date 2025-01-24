const { Accessory } = require("../../models");

const getAccessories = async (req, res) => {
  const { page } = req.query;
  const accessoriesList = await Accessory.find()
    .skip((page - 1) * 12)
    .limit(12);
  return res.status(200).json(accessoriesList);
};

const getCategory = async (req, res) => {
  const { category, page } = req.query;
  const categoryList = await Accessory.find({ category: category })
    .skip((page - 1) * 12)
    .limit(12);
  return res.status(200).json(categoryList);
};

const getAccessory = async (req, res) => {
  const { _id } = req.params;
  const accessory = await Accessory.findOne({ _id: _id });
  return res.status(200).json(accessory);
};

const addAccessory = async (req, res) => {
  const { brand, name, category, price, photos } = req.body;
  const accessory = {
    brand,
    name,
    category,
    price,
    photos,
  };

  const addedAccessory = await Accessory.create(accessory);
  return res.status(200).json({ message: "added accessory", addedAccessory });
};

module.exports = {
  getAccessories,
  getCategory,
  getAccessory,
  addAccessory,
};
