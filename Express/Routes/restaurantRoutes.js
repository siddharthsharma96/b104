const express = require("express");
const restaurantController = require("./../Controllers/restaurantController");
const routes = express.Router();
routes
  .route("/")
  .get(restaurantController.getAllRestaurantData)
  .post(restaurantController.createResaturant);

routes
  .route("/:id")
  .get(restaurantController.restaurantData)
  .put(restaurantController.updateRestaurant)
  .delete(restaurantController.deleteRestaurant);

module.exports = routes;
