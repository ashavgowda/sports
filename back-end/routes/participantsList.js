const express = require("express");
const router = express.Router();
const bp = require("body-parser");
const { ParticipantsList } = require("../models/participantsList");
router.use(bp.json());
router.use(bp.urlencoded({ extended: true }));

router.get("/api/participantsList", (req, res) => {
  ParticipantsList.find({}, (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      console.log(err);
    }
  });
});

router.post("/api/participantsList/add", (req, res) => {
  const emp = new ParticipantsList({
    ParticipantsId: req.body.ParticipantsId,
    SportsId: req.body.SportsId,
    ParticipantsName: req.body.ParticipantsName,
    ParticipantsNumber: req.body.ParticipantsNumber,
    Status: true,
  });
  emp.save((err, data) => {
    if (!err) {
      res.status(200).json({
        code: 200,
        message: "ParticipantsList Added Successfully",
        data: data,
      });
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
