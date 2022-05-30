const express = require("express");
const { reset } = require("nodemon");
const router = express();
const carModel = require("../models/Car");

router.get("/cars", async (req, res) => {
  const cars = await carModel.find({});
  try {
    res.send(cars);
  } catch (error) {
    return res.status(400).send(error);
  }
});

module.exports = router;
