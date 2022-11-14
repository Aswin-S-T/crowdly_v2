const mongoose = require("mongoose");
require("dotenv").config();

const dbUrl = "mongodb://localhost:27017/crowdly_v2";

module.exports.connect = () => {
  mongoose.connect(
    dbUrl,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err, done) => {
      if (err) throw err;
      console.log(`Mongodb connected successfully`);
    }
  );
};
