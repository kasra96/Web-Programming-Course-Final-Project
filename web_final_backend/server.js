const express = require("express");
const mongoose = require("mongoose");
const restaurant = require("./models/restaurant");
const address = require("./models/address");
const category = require("./models/category");
const comment = require("./models/comment");
const food = require("./models/food");

const app = express();
const port = 3001;

mongoose.connect("mongodb://localhost/web_ta", { useNewUrlParser: true });
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function() {
  console.log("DB connection alive");
});

// mongoose.connection.dropDatabase();

app.use(express.json());

// init_restaurant();

//routers
const foodRouter = require("./routes/restaurantRouter.js");
app.use("/api/restaurants", foodRouter);

app.listen(port, () => console.log(`listening on port ${port}!`));

function init_restaurant() {
  console.log("you've called me");
  let cat_irani = new category.model();
  cat_irani.name = "irani";
  cat_irani.persian_name = "ایرانی";
  cat_irani.save();
  let cat_kabab = new category.model();
  cat_kabab.name = "kebab";
  cat_kabab.persian_name = "کباب";
  cat_kabab.save();
  let cat_sandwich = new category.model();
  cat_sandwich.name = "sandwich";
  cat_sandwich.persian_name = "ساندویچ";
  cat_sandwich.save();
  let cat_pizza = new category.model();
  cat_pizza.name = "pizza";
  cat_pizza.persian_name = "پیتزا";
  cat_pizza.save();
  let cat_salad = new category.model();
  cat_salad.name = "salad";
  cat_salad.persian_name = "سالاد";
  cat_salad.save();
  let cat_drink = new category.model();
  cat_drink.name = "drink";
  cat_drink.persian_name = "نوشیدنی";
  cat_drink.save();
  let restaurant_obj = new restaurant.model();
  restaurant_obj.name = "ای تی اف 3";
  let adrs = new address.model();
  adrs.city = "تهران";
  adrs.area = "صادقیه";
  adrs.addressLine = "تهران اکباتان";
  adrs.save();
  restaurant_obj.address = adrs;
  restaurant_obj.categories = [cat_kabab, cat_irani, cat_salad, cat_drink];
  let food1 = new food.model();
  food1.name = "کباب کوبیده";
  food1.price = 35000;
  food1.description = "";
  food1.foodSet = "kabab";
  food1.persian_foodSet = "کباب";
  food1.save();
  let food11 = new food.model();
  food11.name = "خورشت قیمه";
  food11.price = 25000;
  food11.description = "";
  food11.foodSet = "irani";
  food11.persian_foodSet = "ایرانی";
  food11.save();
  let food5 = new food.model();
  food5.name = "دوغ گازدار";
  food5.price = 9000;
  food5.description = "";
  food5.foodSet = "drink";
  food5.persian_foodSet = "نوشیدنی";
  food5.save();
  let food6 = new food.model();
  food6.name = "سالاد شیرازی";
  food6.price = 13000;
  food6.description = "";
  food6.foodSet = "salad";
  food6.persian_foodSet = "سالاد";
  food6.save();
  let food7 = new food.model();
  food7.name = "سالاد غیر شیرازی";
  food7.price = 23000;
  food7.description = "";
  food7.foodSet = "salad";
  food7.persian_foodSet = "سالاد";
  food7.save();
  restaurant_obj.foods = [food1, food11, food5, food6, food7];
  restaurant_obj.openingTime = 12;
  restaurant_obj.closingTime = 21;
  let cmnt = new comment.model();
  cmnt.author = "اصغر شیرینی";
  cmnt.quality = 1; // a number between 0-5
  cmnt.packaging = 1;
  cmnt.deliveryTime = 10;
  cmnt.text = "خیلی خوب بود!";
  cmnt.created_at = new Date();
  cmnt.save();
  let cmnt2 = new comment.model();
  cmnt2.author = "اصغر فرهادی";
  cmnt2.quality = 2; // a number between 0-5
  cmnt2.packaging = 2;
  cmnt2.deliveryTime = 10;
  cmnt2.text = "خیلی بد بود!";
  cmnt2.created_at = new Date();
  cmnt2.save();

  restaurant_obj.comments = [cmnt, cmnt2];
  restaurant_obj.averageRate = 5;
  restaurant_obj.save();
}
