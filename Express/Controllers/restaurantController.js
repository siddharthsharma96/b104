const RestaurantModel = require("./../Models/RestaurantModel");

exports.getAllRestaurantData = async (req, res) => {
  try {
    const restaurantdata = await RestaurantModel.find();
    res.status(200).json({
      status: true,
      length: restaurantdata.length,
      timeOfHit: req.requestTimeOfHit,
      msg: req.myMessage,
      data: {
        restaurantdata,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      timeOfHit: req.requestTimeOfHit,
      message: err.message,
    });
  }
};

exports.restaurantData = async (req, res) => {
  try {
    const id = req.params.id;
    const restaurant = await RestaurantModel.findById(id);
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
  } catch (err) {
    res.status(400).json({
      status: "fail",
      timeOfHit: req.requestTimeOfHit,
      message: err.message,
    });
  }
};
exports.createResaturant = async (req, res) => {
  try {
    const newRestaurant = await RestaurantModel.create(req.body);

    res.status(201).json({
      status: true,
      timeOfHit: req.requestTimeOfHit,
      data: newRestaurant,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      timeOfHit: req.requestTimeOfHit,
      message: err.message,
    });
  }
};

exports.updateRestaurant = async (req, res) => {
  try {
    const updateRestaurant = await RestaurantModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updateRestaurant) {
      return res.status(404).json({
        status: "fails",
        message: "No Restaurant Found using this id",
      });
    }
    res.status(201).json({
      status: true,
      timeOfHit: req.requestTimeOfHit,
      data: updateRestaurant,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      timeOfHit: req.requestTimeOfHit,
      message: err.message,
    });
  }
};
exports.deleteRestaurant = async (req, res) => {
  try {
    const deleteRestaurant = await RestaurantModel.findByIdAndDelete(
      req.params.id
    );
    if (!deleteRestaurant) {
      return res.status(404).json({
        status: "fails",
        message: "No Restaurant Found using this id",
      });
    }
    res.status(204).json({
      status: true,
      timeOfHit: req.requestTimeOfHit,
      msg: "data deleted ",
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      timeOfHit: req.requestTimeOfHit,
      message: err.message,
    });
  }
};
