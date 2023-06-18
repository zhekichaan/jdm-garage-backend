const mongoose = require("mongoose");
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
mongoose.set("strictQuery", false);

const carsRouter = require("./routes/api/carsRouter");
const wheelsRouter = require("./routes/api/wheelsRouter");
const accessoriesRouter = require("./routes/api/accessoriesRouter");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/cars", carsRouter);
app.use("/api/wheels", wheelsRouter);
app.use("/api/accessories", accessoriesRouter);

app.use((_, res) => res.status(404).json({ message: "Not Found" }));

app.use((err, _, res, __) => {
  const { status = 500, message = "Server internal error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
