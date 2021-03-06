var express = require('express');
var fs = require('fs');
var file = fs.readFileSync("index.html", "utf8");
var buffer = new Buffer(file, "utf8");
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(buffer.toString("utf8"));
  });

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
