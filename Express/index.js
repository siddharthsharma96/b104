const express = require("express");
const restaurantRoutes = require("./Routes/restaurantRoutes");
const menuRoutes = require("./Routes/menuRoutes");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./.config.env" });
app.use(express.json());

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB:", err);
  });
app.use((req, res, next) => {
  const now = new Date();
  req.requestTimeOfHit = now.toLocaleString();
  next();
});

app.use((req, res, next) => {
  req.myMessage = "Hello From CodehubNexus";
  next();
});

app.use("/api/v1/restaurant/", restaurantRoutes);
app.use("/api/v1/menu", menuRoutes);
app.listen(process.env.PORTNO, () => {
  console.log("Server started on port no ", process.env.PORTNO);
});
