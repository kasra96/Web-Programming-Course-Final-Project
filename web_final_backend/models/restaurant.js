const mongoose = require("mongoose");
const address = require("./address");
const category = require("./category");
const food = require("./food");
const comment = require("./comment");

const restaurantSchema = new mongoose.Schema({
  name: String,
  // logo:String, // src of logo image
  openingTime: Number, // time of opening
  closingTime: Number, // time of closing
  averageRate: Number, // average of comments rate
  address: address.schema,
  categories: [category.schema], // array of food categories. e.g. fastfood or irani
  foods: [food.schema],
  comments: [comment.schema]
});

module.exports = {
  schema: restaurantSchema,
  model: mongoose.model("restaurant", restaurantSchema)
};
