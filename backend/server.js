const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
//var session = require("express-session");
//const router = express.Router();
const cors = require("cors");
const API_PORT = 3001;
const app = express();
//var passport = require('passport');
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(passport.initialize());
//app.use(passport.session());
app.use(bodyParser.json());
app.use(logger("dev"));
app.use(cors());


var index = require('./routes/main_router');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

mongoose.connect("mongodb://localhost:27017/Fullstack", {
  useNewUrlParser: true
});
let db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
app.use("/api",index);

app.listen(API_PORT, () => console.log(`LISTENING ON UHH PORT ${API_PORT}`));
