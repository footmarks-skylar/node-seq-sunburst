
var express = require('express');
var app = express();
var path = require('path');
var util = require('util');

app.set('views', path.join(__dirname, 'public/views'));
app.set('view options', { layout: false });
app.engine('html', require('ejs').renderFile);
app.use(express.logger("dev"));
app.use(express.compress());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    res.render('index.html', {});   
}); 

app.listen('8080', function () {
    console.log('Express listening on port 8080');
}); 
