const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  id: String,
  name: String
});

module.exports = {
  schema: foodSchema,
  model: mongoose.model("food", foodSchema)
};
