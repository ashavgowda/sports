let mongoose = require("mongoose");

const User = mongoose.model("User", {
  UserId: {
    type: String,
    required: false,
  },
  MobileNo: {
    type: String,
    required: false,
  },
  EmailId: {
    type: String,
    required: false,
  },
  Gender: {
    type: String,
    required: false,
  },
  Otp: {
    type: String,
    required: false,
  },
  UserName: {
    type: String,
    required: false,
  },
  UserType: {
    type: String,
    required: false,
  },
  VolunteerDate: {
    type: Array,
    required: false,
  },
  Status: {
    type: String,
    required: false,
  },
});

module.exports = { User };
