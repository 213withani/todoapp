var express = require('express');
var mongoose = require('mongoose');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost/todo2016');
var todoSchema = mongoose.Schema({
   title: {type:String, required:true},
    details: String,
    posted: {type: Date,default:Date.now}
},{collection:'todo'});

var TodoModel  = mongoose.model("TodoModel",todoSchema);

// configure a public directory to host static content
app.use(express.static(__dirname + '/public'));

require ("./test/app.js")(app);

var myApp=require ("./lectures/afternoon/app");

myApp(app,TodoModel)

var port = process.env.PORT || 3000;

app.listen(port);