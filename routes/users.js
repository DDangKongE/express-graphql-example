var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const object = {
    'id': 1,
    'name': 'HanSeungMin',
    'age': 30,
  };

  res.send(object);
});

module.exports = router;
