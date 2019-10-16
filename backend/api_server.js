const express = require("express");
const routes = require("./routes");
const app = express();

const jsonParser = require("body-parser").json;
const logger = require("morgan");
const mongoose = require("mongoose");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  if (req.method === "Options") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, DELETE");
    return res.status(200).json({});
  }
});
app.use(logger("dev"));
app.use(jsonParser());
app.use("/questions", routes);
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message
    }
  });
});
const port = process.env.port || 3003;

app.listen(port, () => {
  console.log(`Web server listening on: ${port}`);
});
