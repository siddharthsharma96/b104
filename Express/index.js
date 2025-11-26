const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());
const restaurantdata = JSON.parse(
  fs.readFileSync("./Restaurant.json", "utf-8")
);

// R- Read Get
// for all restaurant data
app.get("/api/v1/restaurant", (req, res) => {
  res.status(200).json({
    status: true,
    length: restaurantdata.length,
    data: {
      restaurantdata,
    },
  });
});

// for single Restaurant  data
app.get("/api/v1/restaurant/:id", (req, res) => {
  const id = req.params.id;
  const restaurant = restaurantdata.find((el) => el.id === id);
  if (!restaurant) {
    res.status(404).json({
      status: "fail",
      message: "Entered wrong resID",
    });
  }
  res.status(200).json({
    status: "success",
    restaurant,
  });
});

// C- Create Post
app.post("/api/v1/restaurant", (req, res) => {
  const newId = restaurantdata[restaurantdata.length - 1].id + 1;
  const newRestaurant = Object.assign({ id: newId }, req.body);
  restaurantdata.push(newRestaurant);
  fs.writeFile("./Restaurant.json", JSON.stringify(restaurantdata), (err) => {
    res.status(400).json({
      status: "fail",
    });
  });
  res.status(201).json({
    status: true,
    message: req.body,
  });
});
// U- Update put and patch
app.put("/api/v1/restaurant/:id", (req, res) => {
  const id = req.params.id;
  const restaurant = restaurantdata.find((el) => el.id === id);
  if (!restaurant) {
    res.status(404).json({
      status: "fail",
      message: "Entered wrong resID",
    });
  }
  res.status(200).json({
    statu: true,
    message: "Post Updated succefully",
  });
});
// D- Delete Delete
app.delete("/api/v1/restaurant/:id", (req, res) => {
  const id = req.params.id;
  const restaurant = restaurantdata.find((el) => el.id === id);
  if (!restaurant) {
    res.status(404).json({
      status: "fail",
      message: "Entered wrong resID",
    });
  }
  res.status(200).json({
    statu: true,
    message: "Post deleted succefully",
  });
});

app.listen(8000, () => {
  console.log("Server started on port no ", 8000);
});
