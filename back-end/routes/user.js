const express = require("express");
const router = express.Router();
const bp = require("body-parser");
const { User } = require("../models/User");
router.use(bp.json());
router.use(bp.urlencoded({ extended: true }));

router.get("/api/user", (req, res) => {
  let MobileNo1 = req.query.MobileNo;
  User.find({ MobileNo: MobileNo1 }, (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      console.log(err);
    }
  });
});

router.post("/api/user/add", (req, res) => {
  const emp = new User({
    UserName: req.body.UserName,
    MobileNo: req.body.MobileNo,
    EmailId: req.body.EmailId,
    Gender: req.body.Gender,
    Otp: req.body.Otp,
    UserType: req.body.UserType,
    VolunteerDate: req.body.VolunteerDate,
    Status: true,
  });
  emp.save((err, data) => {
    if (!err) {
      res.status(200).json({
        code: 200,
        message: "User Added Successfully",
        data: data,
      });
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
