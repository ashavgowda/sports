const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let dev_db_url = "mongodb://localhost:27017/sports";
let mongoDB = process.env.MONGODB_URI || dev_db_url;

let mongoose_connection = () => {
  return new Promise((resolve, reject) => {
    mongoose.Promise = global.Promise;
    mongoose.pluralize(null);

    mongoose
      .connect(mongoDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((res, err) => {
        if (err) return reject(err);
        else resolve();
      });
  });
};

let mongoose_disconnect = () => {
  return mongoose.disconnect();
};

module.exports = { mongoose_connection, mongoose_disconnect };
