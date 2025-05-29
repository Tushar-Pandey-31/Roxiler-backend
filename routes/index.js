var express = require('express');
var router = express.Router();
const db = require('../config/db');
const User = require('../models/User')
const Store = require('../models/Store')
const Rating = require('../models/Rating')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  db.query('SELECT * FROM ')
});

module.exports = router;
