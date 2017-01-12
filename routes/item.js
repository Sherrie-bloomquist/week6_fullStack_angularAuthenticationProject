var express = require('express');
var path = require('path');
var router = express.Router();

var Item = require('../models/item');

router.post('/', function(req, res) {
  if(req.isAuthenticated()) {
    var newItem = new Item({
      description: req.body.description,
      image_url: req.body.image,
      user_id: req.user
    });

    Item.create(newItem)
    .then(function(result) {
      console.log(result);
      res.sendStatus(200);
    })
    .catch(function(err) {
      console.log(err);
      res.sendStatus(500);
    });
  } else {
    res.sendStatus(401);
  }
});

module.exports = router;
