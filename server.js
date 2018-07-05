var express = require('express');
var url = require('url');
// var path = require('path');
var serveStatic = require('serve-static');
var app = express();
//set publicpath access from root directory 
app.use(serveStatic(__dirname + "/dist"));

// port address for server startup
var port = process.env.PORT || 5000;

// Server starting
app.listen(port);
console.log('starting project at ' + port);

app.use(function (req, res) {
  console.log('Time:', Date.now());
  var reDirectURl = url.parse(req.url, true);
  console.log(reDirectURl);
});

// app.use('/:id', function (req, res) {
//   console.log(req);
//   var reDirectURl = url.parse(req.url, true);
//   console.log(reDirectURl);
//   if(reDirectURl.search != ''){
//    res.setHeader("Location", "/CreateProject");
//   }
//   // res.redirect('/CreateProject');
// });