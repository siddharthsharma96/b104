const fs = require("fs");

let menuData = JSON.parse(fs.readFileSync("./menu.json", "utf-8"));

exports.getAllMenu = (req, res) => {
  res.status(200).json({
    status: true,
    length: menuData.length,
    timeOfHit: req.requestTimeOfHit,
    msg: req.myMessage,
    data: {
      menuData,
    },
  });
};
