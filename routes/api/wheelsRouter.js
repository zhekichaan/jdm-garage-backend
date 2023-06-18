const express = require("express");

const { ctrlWrapper } = require("../../middlewares");
const { wheels: ctrl } = require("../../controllers");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getWheels));
router.get("/wheel/:_id", ctrlWrapper(ctrl.getWheel));
router.get("/brand/", ctrlWrapper(ctrl.getBrand));
router.post("/", ctrlWrapper(ctrl.addWheel));

module.exports = router;
