const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const Data = require("./data");
const cors = require('cors');
const API_PORT = 3001;
const app = express();
const router = express.Router();

mongoose.connect('mongodb://localhost:27017/Fullstack', { useNewUrlParser: true });
let db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
router.get("/", (req, res) => {
  res.json({ message: "HELLOW WORLDUUHHHH" });
});


const DataSet=[];
router.post('/putData', (req, res) => {
  let data = new Data();
  console.log("dsd");
  const { id, name,password } = req.body;
  console.log( id, name,password );
  if ((!id && id !== 0) || !name|| !password) {
    return res.json({
      success: false,
      error: 'INVALID INPUTS',
    });
  }
  data.name = name;
  data.password=password;
  data.id = id;
  data.save(err => {
    if (err) console.log("fail");  
    return console.log( "success true" );
  });


});

app.use("/api", router);

app.listen(API_PORT, () => console.log(`LISTENING ON UHH PORT ${API_PORT}`));