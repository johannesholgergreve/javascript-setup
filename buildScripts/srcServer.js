// var express = require('express'),
//     path = require('path'),
//     open = require('open');

import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev.js';


const port = 3000;
const app = express();
const compiler = webpack(config);




app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));


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
