const express = require("express");

const { ctrlWrapper } = require("../../middlewares");
const { cars: ctrl } = require("../../controllers");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getCars));
router.get("/car/:_id", ctrlWrapper(ctrl.getCar));
router.get("/make/", ctrlWrapper(ctrl.getMake));
router.get("/featured", ctrlWrapper(ctrl.getFeatured));
router.post("/", ctrlWrapper(ctrl.addCar));

module.exports = router;
