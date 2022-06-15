const express = require("express");
const router = express.Router();
const bp = require("body-parser");
const { Participants } = require("../models/participants");
router.use(bp.json());
router.use(bp.urlencoded({ extended: true }));

router.get("/api/participants", (req, res) => {
  Participants.find({}, (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      console.log(err);
    }
  });
});

router.post("/api/participants/add", (req, res) => {
  const emp = new Participants({
    UserId: req.body.UserId,
    WhatsappNo: req.body.WhatsappNo,
    participantName: req.body.participantName,
    CategoryId: req.body.CategoryId,
    EmailId: req.body.EmailId,
    Status: true,
  });
  emp.save((err, data) => {
    if (!err) {
      res.status(200).json({
        code: 200,
        message: "Participant Added Successfully",
        data: data,
      });
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
