const express = require("express");
const router = express.Router();
const bp = require("body-parser");
const { Venues } = require("../models/Venues");
router.use(bp.json());
router.use(bp.urlencoded({ extended: true }));

router.get("/api/venues", (req, res) => {
  Venues.find({}, (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      console.log(err);
    }
  });
});

router.post("/api/venues/add", (req, res) => {
  let reqObj = req.body;
  let result = [];
  for (const iterator of reqObj) {
    var emp = new Venues(iterator);
    emp.save((err, data) => {
      if (err) {
      } else {
        result.push(data);
      }
    });
  }
  res.json({
    code: 200,
    message: "Venues Added Successfully",
    data: result,
  });
});

module.exports = router;
