var express = require("express");
var app = express();
var cfenv = require("cfenv");
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.set('view engine', 'ejs');

app.post("/api/previdencia", function (request, response) {
  //var userName = request.body.e;
  var i = request.body.i;
  var e = request.body.e;
  var ir = request.body.ir;
  var id = request.body.id;
  var ia = request.body.ia;
  response.render("previdencia", {
    e: e,
    ir: ir,
    id: id,
    ia: ia,
    i: i
  });
});

//serve static file (index.html, images, css)
app.use(express.static(__dirname + '/views'));



var port = process.env.PORT || 3000
app.listen(port, function() {
    console.log("To view your app, open this link in your browser: http://localhost:" + port);
});

var livereload = require('livereload');
var server = livereload.createServer();
server.watch(__dirname + "/");