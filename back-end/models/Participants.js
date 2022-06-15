let mongoose = require("mongoose");

const Participants = mongoose.model("Participants", {
  UserId: {
    type: String,
    required: false,
  },
  WhatsappNo: {
    type: String,
    required: false,
  },
  participantName: {
    type: String,
    required: false,
  },
  EmailId: {
    type: String,
    required: false,
  },
  CategoryId: {
    type: String,
    required: false,
  },
  Status: {
    type: String,
    required: false,
  },
});

module.exports = { Participants };
