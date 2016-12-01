// var express = require('express'),
//     path = require('path'),
//     open = require('open');

import express from 'express';
import path from 'path';
import open from 'open';


var port = 3000;
var app = express();

// Declare routing
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../src/index.html'));
});


// Tell express to listing to port
app.listen(port, function(err){
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
