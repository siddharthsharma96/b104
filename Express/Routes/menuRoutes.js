const express = require("express");
const menuController = require("./../Controllers/menuController");
const routes = express.Router();

routes.route("/").get(menuController.getAllMenu);

module.exports = routes;
