var express = require('express');
var router = express.Router();

const gur = require("../service/GroveUltraRanger");

router.get('/', function(req, res) {
  var pp = gur.fetchDistance();
  pp.then(function(data){
    res.json({
      cm: data
    });
  })
});

module.exports = router;
