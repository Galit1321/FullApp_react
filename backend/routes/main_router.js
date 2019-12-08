var express = require('express');
var router = express.Router();
//var passport = require('passport');
const Data = require("../models/data");
const User = require("../models/Users")

/*
passport.use(new LocalStrategy(
    function(username, password, done) {
        Data.findOne({
            username: username
        }, function(err, user) {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false);
            }
            if (user.password != password) {
                return done(null, false);
            }
            return done(null, user);
        });
    }
));
passport.serializeUser(function(user, done) {
    done(null, user.id);
});
passport.deserializeUser(function(id, done) {
    Data.findById(id, function(err, user) {
        done(err, user);
    });
});*/
router.post("/updateData", (req, res) => {
    const { id, update } = req.body;
    Data.findByIdAndUpdate(id, update, err => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    });
  });

  router.post("/putUser", (req, res) => {
    console.log("server");
    let data = new User();
    const new_user = req.body;
    console.log(new_user);
    if ((!new_user.id && new_user.id!== 0) || !new_user.name || !new_user.password) {
      return res.json({
        success: false,
        error: "INVALID INPUTS",
      });
    }
    console.log(new_user);
    data.id=new_user.id;
    data.username=new_user.user_name;
    data.name=new_user.name;
    data.email=new_user.email;
    data.password=new_user.password;
    data.save(err => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    });
  });

  router.post("/findUser", (req, res) => {
    const { user ,password } = req.body;
    console.log(user);
    User.find({ username: user.username }, function(err, docs) {
      if (docs.length) {
        res.json({ success: true });
      } else {
        res.json({ success: false });
      }
    });
  });
  
  router.delete("/deleteData", (req, res) => {
    const { id } = req.body;
    Data.findByIdAndRemove(id, err => {
      if (err) return res.send(err);
      return res.json({ success: true });
    });
  });
  
  router.get("/getData", (req, res) => {
    Data.find((err, data) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, data: data });
    });
  });


    
  router.get("/getScore", (req, res) => {
      return res.json({ score: 100 });
    });
  
  module.exports = router;