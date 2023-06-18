const express = require("express");

const { ctrlWrapper } = require("../../middlewares");
const { accessories: ctrl } = require("../../controllers");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAccessories));
router.get("/accessory/:_id", ctrlWrapper(ctrl.getAccessory));
router.get("/category/", ctrlWrapper(ctrl.getCategory));
router.post("/", ctrlWrapper(ctrl.addAccessory));

module.exports = router;
