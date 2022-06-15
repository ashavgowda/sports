let mongoose = require("mongoose");

const ParticipantsList = mongoose.model("ParticipantsList", {
  ParticipantsId: {
    type: String,
    required: false,
  },
  SportsId: {
    type: String,
    required: false,
  },
  ParticipantsName: {
    type: String,
    required: false,
  },
  ParticipantsNumber: {
    type: String,
    required: false,
  },
  Status: {
    type: String,
    required: false,
  },
});

module.exports = { ParticipantsList };
