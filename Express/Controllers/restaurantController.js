const fs = require("fs");

let restaurantdata = JSON.parse(fs.readFileSync("./Restaurant.json", "utf-8"));

exports.getAllRestaurantData = (req, res) => {
  res.status(200).json({
    status: true,
    length: restaurantdata.length,
    timeOfHit: req.requestTimeOfHit,
    msg: req.myMessage,
    data: {
      restaurantdata,
    },
  });
};

exports.restaurantData = (req, res) => {
  const id = req.params.id;
  const restaurant = restaurantdata.find((el) => el.id === id);
  if (!restaurant) {
    res.status(404).json({
      status: "fail",
      timeOfHit: req.requestTimeOfHit,
      message: "Entered wrong resID",
    });
  }
  res.status(200).json({
    status: "success",
    timeOfHit: req.requestTimeOfHit,
    restaurant,
  });
};
exports.createResaturant = (req, res) => {
  const newId = restaurantdata[restaurantdata.length - 1].id + 1;
  const newRestaurant = Object.assign({ id: newId }, req.body);
  restaurantdata.push(newRestaurant);
  fs.writeFile("./Restaurant.json", JSON.stringify(restaurantdata), (err) => {
    res.status(400).json({
      status: "fail",
      timeOfHit: req.requestTimeOfHit,
    });
  });
  res.status(201).json({
    status: true,
    timeOfHit: req.requestTimeOfHit,
    message: req.body,
  });
};

exports.updateRestaurant = (req, res) => {
  const id = req.params.id;
  const restaurant = restaurantdata.find((el) => el.id === id);
  if (!restaurant) {
    res.status(404).json({
      status: "fail",
      timeOfHit: req.requestTimeOfHit,
      message: "Entered wrong resID",
    });
  }
  res.status(200).json({
    statu: true,
    timeOfHit: req.requestTimeOfHit,
    message: "Post Updated succefully",
  });
};
exports.deleteRestaurant = (req, res) => {
  const id = req.params.id;
  const restaurant = restaurantdata.find((el) => el.id === id);
  if (!restaurant) {
    res.status(404).json({
      status: "fail",
      timeOfHit: req.requestTimeOfHit,
      message: "Entered wrong resID",
    });
  }
  res.status(200).json({
    statu: true,
    timeOfHit: req.requestTimeOfHit,
    message: "Post deleted succefully",
  });
};
