var express = require('express');
var router = express.Router();
var passport = require('passport');
const Data = require("../data");


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
});
router.post("/updateData", (req, res) => {
    const { id, update } = req.body;
    Data.findByIdAndUpdate(id, update, err => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    });
  });

  router.post("/putData", (req, res) => {
    console.log("server");
    let data = new Data();
    console.log("dsd");
    const { id, name, password } = req.body;
    console.log(id, name, password);
    if ((!id && id !== 0) || !name || !password) {
      return res.json({
        success: false,
        error: "INVALID INPUTS"
      });
    }
    data.name = name;
    data.url = password;
    data.id = id;
    data.save(err => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    });
  });

  router.post("/findUser", (req, res) => {
    const { user } = req.body;
    console.log(user);
    Data.find({ name: user.name }, function(err, docs) {
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
  
  router.get("/getData",passport.authenticate('local', { failureFlash: 'Invalid username or password.' }), (req, res) => {
    Data.find((err, data) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, data: data });
    });
  });
  