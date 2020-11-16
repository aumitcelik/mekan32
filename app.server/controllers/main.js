var express = require('express');
var router = express.Router();


module.exports.index=function(req, res) {
  res.render('index', { title: 'Umit' });
};

module.exports.admin=function(req, res) {
  res.render('admin', { title: 'Admin' });
};

