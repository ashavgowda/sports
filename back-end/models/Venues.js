let mongoose = require("mongoose");

const Venues = mongoose.model("Venues", {
  VenueName: {
    type: String,
    required: false,
  },
  SportsId: {
    type: String,
    required: false,
  },
  UserId: {
    type: String,
    required: false,
  },
  ParticipantsId: {
    type: String,
    required: false,
  },
  Status: {
    type: String,
    required: false,
  },
});

module.exports = { Venues };
