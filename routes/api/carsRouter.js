const express = require("express");

const {
  // validation,
  ctrlWrapper,
  // joiGetMyProductSchema,
} = require("../../middlewares");
const { cars: ctrl } = require("../../controllers");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getCars));

module.exports = router;
