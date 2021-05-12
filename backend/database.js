"use strict";
const mongoose = require("mongoose");
const DB_ONLINE =
  "mongodb+srv://Achievers:Achievers@cluster0.xg4zd.mongodb.net/usersAuthFile?retryWrites=true&w=majority";

const DB_LOCAL = "mongodb://localhost/CodeLab24";

module.exports = () => {
  mongoose
    .connect(DB_LOCAL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    })
    .then(() => console.log("Connected to Mongodb......"));
};

// 'mongodb://localhost/upload-files-database'
