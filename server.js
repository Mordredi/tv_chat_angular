var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var port = process.env.PORT || 3000;
var http = require('http').Server(app);
var bcrypt = require('bcrypt');
var morgan = require('morgan');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var path = require('path');

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect(process.env.PROD_MONGODB || 'mongodb://localhost/tvchat_ang');

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, './public', '/index.html'));
});

http.listen(port, function(){
  console.log('listening on ' + port);
});