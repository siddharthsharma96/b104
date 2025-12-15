const express = require("express");
const restaurantRoutes = require("./Routes/restaurantRoutes");
const menuRoutes = require("./Routes/menuRoutes");
const app = express();
app.use(express.json());

// middleware
app.use((req, res, next) => {
  const now = new Date();
  req.requestTimeOfHit = now.toLocaleString();
  next();
});

app.use((req, res, next) => {
  req.myMessage = "Hello From CodehubNexus";
  next();
});
// step1
// const restaurantdata = JSON.parse(
//   fs.readFileSync("./Restaurant.json", "utf-8")
// );

// Controllers
// const getAllRestaurantData = (req, res) => {
//   res.status(200).json({
//     status: true,
//     length: restaurantdata.length,
//     data: {
//       restaurantdata,
//     },
//   });
// };

// let restaurantData = (req, res) => {
//   const id = req.params.id;
//   const restaurant = restaurantdata.find((el) => el.id === id);
//   if (!restaurant) {
//     res.status(404).json({
//       status: "fail",
//       message: "Entered wrong resID",
//     });
//   }
//   res.status(200).json({
//     status: "success",
//     restaurant,
//   });
// };
// let createResaturant = (req, res) => {
//   const newId = restaurantdata[restaurantdata.length - 1].id + 1;
//   const newRestaurant = Object.assign({ id: newId }, req.body);
//   restaurantdata.push(newRestaurant);
//   fs.writeFile("./Restaurant.json", JSON.stringify(restaurantdata), (err) => {
//     res.status(400).json({
//       status: "fail",
//     });
//   });
//   res.status(201).json({
//     status: true,
//     message: req.body,
//   });
// };

// const updateRestaurant = (req, res) => {
//   const id = req.params.id;
//   const restaurant = restaurantdata.find((el) => el.id === id);
//   if (!restaurant) {
//     res.status(404).json({
//       status: "fail",
//       message: "Entered wrong resID",
//     });
//   }
//   res.status(200).json({
//     statu: true,
//     message: "Post Updated succefully",
//   });
// };
// const deleteRestaurant = (req, res) => {
//   const id = req.params.id;
//   const restaurant = restaurantdata.find((el) => el.id === id);
//   if (!restaurant) {
//     res.status(404).json({
//       status: "fail",
//       message: "Entered wrong resID",
//     });
//   }
//   res.status(200).json({
//     statu: true,
//     message: "Post deleted succefully",
//   });
// };
// R- Read Get
// for all restaurant data
// app.get("/api/v1/restaurant", getAllRestaurantData);

// step2
// // for single Restaurant  data
// app.get("/api/v1/restaurant/:id", restaurantData);

// // C- Create Post
// app.post("/api/v1/restaurant", createResaturant);
// // U- Update put and patch
// app.put("/api/v1/restaurant/:id", updateRestaurant);
// // D- Delete Delete
// app.delete("/api/v1/restaurant/:id", deleteRestaurant);

// step3
// const restaurantRouter = express.Router();
// restaurantRouter.route("/").get(getAllRestaurantData).post(createResaturant);
// restaurantRouter
//   .route("/:id")
//   .get(restaurantData)
//   .put(updateRestaurant)
//   .delete(deleteRestaurant);
// app.use("/api/v1/restaurant", restaurantRouter);
app.use("/api/v1/restaurant/", restaurantRoutes);
app.use("/api/v1/menu", menuRoutes);
app.listen(8000, () => {
  console.log("Server started on port no ", 8000);
});
