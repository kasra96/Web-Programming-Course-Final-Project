// import $ from "jquery";

// $.get("http://demo2469824.mockable.io/best-restaurants", function(
//   data,
//   status
// ) {
//   if (status === "success") {
//     var index = 0;
//     $(".restaurant-subset").each(function() {
//       $(this)
//         .children("div")
//         .children("img")
//         .attr("src", data["restaurants"][index].imgUrl);
//       $(this)
//         .children(".restaurant-name")
//         .html(data["restaurants"][index].name);
//       $(this)
//         .children(".food-names")
//         .html(translate_foods_name(data["restaurants"][index].foods));
//       $(this)
//         .children(".restaurant-address")
//         .html(data["restaurants"][index].address);
//       index++;
//     });

//     $(".restaurant-container").each(function() {
//       $(this)
//         .children("div")
//         .children("img")
//         .attr("src", data["restaurants"][index].imgUrl);
//       $(this)
//         .children(".small-rest-name")
//         .html(data["restaurants"][index].name);
//       index++;
//     });
//   }
// });

// function translate_foods_name(foods) {
//   var finall_string = new Array();
//   for (let i = 0; i < foods.length; i++) {
//     finall_string.push(translate_food_name(foods[i]));
//     if (i != foods.length - 1) finall_string.push(" . ");
//   }
//   return finall_string;
// }

// function translate_food_name(food_name) {
//   const map = {
//     pizza: "پیتزا",
//     sandwich: "ساندویچ",
//     burger: "برگر",
//     kebab: "کباب",
//     fastfood: "فست‌فود",
//     salad: "سالاد",
//     iranian: "ایرانی",
//     pasta: "پاستا",
//     fish: "غذای دریایی",
//     breakfast: "صبحانه",
//     juice: "آبمیوه طبیعی",
//     steak: "استیک",
//     soup: "سوپ"
//   };
//   return map[food_name];
// }

// $.get("http://demo2469824.mockable.io/foods", function(data, status) {
//   if (status === "success") {
//     var food_xml = data.getElementsByTagName("food");

//     var index = 0;
//     $(".food-pics")
//       .children()
//       .each(function() {
//         var food_data = food_xml[index];
//         var persian_name = translate_food_name(
//           food_data.getElementsByTagName("name").item(0).innerHTML
//         );
//         $(this)
//           .children(".food-name")
//           .html(persian_name);
//         var tmp =
//           food_data.getElementsByTagName("count").item(0).innerHTML +
//           " رستوران فعال";
//         $(this)
//           .children(".food-name-describtion")
//           .html(tmp);
//         var img_url = food_data.getElementsByTagName("imgUrl").item(0)
//           .innerHTML;
//         $(this).css("background", "url(" + img_url + ")");
//         $(this).css("background-size", "cover");

//         index++;
//       });
//     for (var i = 4; i < food_xml.length; i++) {
//       var food_data = food_xml[i];
//       var name = food_data.getElementsByTagName("name").item(0).innerHTML;
//       $(".food-buttons").append(food_btn_element(name));
//     }
//   }
// });

// function food_btn_element(name) {
//   var name = translate_food_name(name);
//   return '<button class="food-button">' + name + "</button>";
// }
