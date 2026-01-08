const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Restaurant name is required"],
      unique: [true, "Restaurant name must be unique"],
    },
    cloudinaryImageId: {
      type: String,
    },
    locality: {
      type: String,
    },
    areaName: {
      type: String,
    },
    costForTwo: [String],
    cuisines: {
      type: String,
    },
    avgRating: {
      type: String,
    },
    parentId: {
      type: String,
    },
    avgRatingString: {
      type: String,
    },
    totalRatingsString: {
      type: String,
    },
    nextCloseTime: {
      type: String,
    },
    opened: {
      type: Boolean,
      default: true,
      enum: {
        values: [true, false],
        message: "Opened can either be true or false",
      },
    },
  },
  {
    timestamps: true,
  }
);

const RestaurantModel = mongoose.model("Restaurant", restaurantSchema);
module.exports = RestaurantModel;
