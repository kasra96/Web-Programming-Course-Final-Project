const express = require("express");
const food = require("../models/food");
const restaurant = require("../models/restaurant");

const restaurantRouter = express.Router();

restaurantRouter
  .use((req, res, next) => {
    console.log("you've called food api");
    req.restaurant = {};
    next();
  })
  .get("/", (req, res) => {
    food.model.find({ name: "hiNoob" }, (error, foods) => {
      if (error) {
        res.send(error);
      }
      res.send(foods);
    });
  })
  .post("/", (req, res) => {
    let foodObject = new food.model();
    foodObject.id = req.body.id;
    foodObject.name = req.body.name;
    foodObject.save();
    res.json({
      message: "success"
    });
  });
module.exports = restaurantRouter;
