const express = require("express");
const food = require("../models/food");
const restaurant = require("../models/restaurant");
const ObjectId = require("mongodb").ObjectId;

const restaurantRouter = express.Router();

restaurantRouter
  .use((req, res, next) => {
    console.log("you've called food api");
    next();
  })

  .get("/", (req, res) => {
    if (req.query.area) {
      if (req.query.category) {
        restaurant.model.find(
          {
            "address.area": req.query.area,
            "categories.name": { $in: req.query.category }
          },
          (error, restaurants) => {
            if (error) {
              res.set("Access-Control-Allow-Origin", "*");
              res.send(error);
            }
            res.set("Access-Control-Allow-Origin", "*");
            res.send(restaurants);
          }
        );
      } else {
        restaurant.model.find(
          { "address.area": req.query.area },
          (error, restaurants) => {
            if (error) {
              res.set("Access-Control-Allow-Origin", "*");
              res.send(error);
            }
            res.set("Access-Control-Allow-Origin", "*");
            res.send(restaurants);
          }
        );
      }
    }
  })

  .get("/area", (req, res) => {
    restaurant.model.find({}, (error, restaurants) => {
      if (error) {
        res.set("Access-Control-Allow-Origin", "*");
        res.send(error);
      } else {
        var matched = [];
        restaurants.forEach(rest => {
          var area = rest.address.area;
          if (area.startsWith(req.query.prefix)) {
            matched.push({ area: area });
          }
        });
        res.set("Access-Control-Allow-Origin", "*");
        res.send(matched);
      }
    });
  })

  .get("/:id", (req, res) => {
    console.log(req.params.id);
    let rest_id = req.params.id;
    restaurant.model.findOne(
      { _id: ObjectId(rest_id) },
      (error, restaurant) => {
        if (error) {
          res.send(error);
          res.set("Access-Control-Allow-Origin", "*");
        } else {
          if (restaurant != null) {
            var avg = 0;
            var count = 0;
            restaurant.comments.forEach(comment => {
              avg += comment.quality;
              count++;
            });
            var tmp_restaurant = {
              _id: restaurant._id,
              name: restaurant.name,
              openingTime: restaurant.openingTime,
              closingTime: restaurant.closingTime,
              address: restaurant.address,
              categories: restaurant.categories,
              foods: restaurant.foods,
              logo: "./images/" + restaurant._id + ".jpg",
              averageRate: avg / count
            };
            res.set("Access-Control-Allow-Origin", "*");
            res.send(tmp_restaurant);
          }
        }
      }
    );
  })

  .get("/:id/comments", (req, res) => {
    restaurant.model.findOne(
      { _id: ObjectId(req.params.id) },
      (error, restaurants) => {
        if (error) {
          res.set("Access-Control-Allow-Origin", "*");
          res.send(error);
        } else {
          if (restaurant != null) {
            var tmp_comments = [];
            restaurant.comments.forEach(comment => {
              var tmp_comment = {
                author: comment.author,
                quality: comment.quality,
                packaging: comment.packaging,
                deliveryTime: comment.deliveryTime,
                text: comment.text,
                created_at: comment.created_at
              };
              tmp_comments.push(tmp_comment);
            });
            tmp_comments.sort((c1, c2) => {
              if (c1.created_at > c2.created_at) return 1;
              return 0;
            });
            res.set("Access-Control-Allow-Origin", "*");
            res.send(tmp_comments);
          }
        }
      }
    );
  })

  .post("/:id/comments", (req, res) => {
    restaurant.model.findOne(
      { _id: ObjectId(req.params.id) },
      (error, restaurant) => {
        if (error) {
          res.set("Access-Control-Allow-Origin", "*");
          res.send(error);
        } else {
          if (restaurant != null) {
            try {
              var commentObject = new comment.model();
              commentObject.author = req.body.author;
              commentObject.quality = req.body.quality;
              commentObject.deliveryTime = req.body.deliveryTime;
              commentObject.packaging = req.body.packaging;
              commentObject.text = req.body.text;
              commentObject.created_at = req.body.created_at;
              commentObject.save();
              restaurant.comments.push(commentObject);
              restaurant.save();

              res.set("Access-Control-Allow-Origin", "*");
              res.send("comment added to DB");
            } catch (err) {
              res.set("Access-Control-Allow-Origin", "*");
              res.send(error);
            }
          }
        }
      }
    );
  })

  .post("/", (req, res) => {
    try {
      var restaurantObject = new restaurant.model();
      restaurantObject.name = req.body.name;
      restaurantObject.openingTime = req.body.openingTime;
      restaurantObject.closingTime = req.body.closingTime;

      var addressObject = new address.model();
      addressObject.area = req.body.address.area;
      addressObject.addressLine = String(req.body.address.addressLine);
      addressObject.save();
      restaurantObject.address = addressObject;

      var categories = new Array();
      if (req.body.categories) {
        for (var i = 0; i < req.body.categories.length; i++) {
          let cat_irani = new category.model();
          cat_irani.name = req.body.categories[i];
          cat_irani.persian_name = "";
          cat_irani.save();
        }
      }
      restaurantObject.categories = categories;

      var foods = [];
      if (req.body.foods) {
        for (var i = 0; i < req.body.foods.length; i++) {
          let food1 = new food.model();
          food1.name = req.body.foods[i];
          food1.price = 35000;
          food1.description = "";
          food1.foodSet = "kabab";
          food1.persian_foodSet = "کباب";
          food1.save();
        }
      }
      restaurantObject.foods = foods;
      restaurantObject.comments = [];
      restaurantObject.save();

      res.send("success");
    } catch (err) {
      res.set("Access-Control-Allow-Origin", "*");
      res.send(error);
    }
  });
module.exports = restaurantRouter;
