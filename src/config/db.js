const mongoose = require("mongoose");

const mongoDB_Url = process.env.MONGODB_URL;

mongoose.connect(mongoDB_Url); // he added some more stuff

mongoose.connection.on("error", (err) => {
  console.log(err);
});

mongoose.connection.on("connected", (res) => {
  console.log("connected");
});
