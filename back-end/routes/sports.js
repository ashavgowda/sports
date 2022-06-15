const express = require("express");
const router = express.Router();
const bp = require("body-parser");
const { Sports } = require("../models/Sports");
router.use(bp.json());
router.use(bp.urlencoded({ extended: true }));

router.get("/api/sports", (req, res) => {
  Sports.find({}, (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      console.log(err);
    }
  });
});

router.post("/api/sports/add", (req, res) => {
  let reqObj = req.body;
  let result = [];
  for (const iterator of reqObj) {
    var emp = new Sports(iterator);
    emp.save((err, data) => {
      if (err) {
      } else {
        result.push(data);
      }
    });
  }

  res.json({
    code: 200,
    message: "Sports Added Successfully",
    data: reqObj,
  });
});

module.exports = router;
