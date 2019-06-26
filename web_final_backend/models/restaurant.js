const mongoose = require("mongoose");
const food = require("./food.js");

const restaurantSchema = new mongoose.Schema({
  id: String,
  name: String,
  foods: [food.schema]
});

module.exports = {
  schema: restaurantSchema,
  model: mongoose.model("restaurant", restaurantSchema)
};
