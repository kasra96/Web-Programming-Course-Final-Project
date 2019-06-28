const express = require("express");
const food = require("../models/food");
const restaurant = require("../models/restaurant");

const restaurantRouter = express.Router();

restaurantRouter
  .use((req, res, next) => {
    console.log("you've called food api");
    next();
  })
  .get("/", (req, res) => {
    restaurant.model.find(
      { "address.area": req.query.area },
      (error, restaurants) => {
        if (error) {
          res.send(error);
        }
        res.set("Access-Control-Allow-Origin", "*");
        res.send(restaurants);
      }
    );
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
