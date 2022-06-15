let mongoose = require("mongoose");

const Sports = mongoose.model("Sports", {
  SportsName: {
    type: String,
    required: false,
  },
  SportsCategory: {
    type: String,
    required: false,
  },
  TeamName: {
    type: String,
    required: false,
  },
  CoachName: {
    type: String,
    required: false,
  },
  Status: {
    type: String,
    required: false,
  },
});

module.exports = { Sports };
