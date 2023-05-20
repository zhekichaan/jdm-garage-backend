const express = require("express");

const {
  // validation,
  ctrlWrapper,
  // joiGetMyProductSchema,
} = require("../../middlewares");
const { cars: ctrl } = require("../../controllers");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getCars));
router.get("/make", ctrlWrapper(ctrl.getMake));

module.exports = router;
