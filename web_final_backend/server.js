const express = require("express");
const mongoose = require("mongoose");
const restaurant = require("./models/food");
const app = express();
const port = 3001;

mongoose.connect("mongodb://localhost/web_ta", { useNewUrlParser: true });
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function() {
  console.log("DB connection alive");
});

app.use(express.json());

let restaurant_obj = new restaurant.model();
restaurant_obj.name = "hiNoob";
restaurant_obj.save();

//routers
const foodRouter = require("./routes/restaurantRouter.js");
app.use("/api/foods", foodRouter);

app.listen(port, () => console.log(`listening on port ${port}!`));
