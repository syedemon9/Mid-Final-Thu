//declaration
var express = require('express');
var login = require('./controllers/login');
var admin = require('./controllers/admin');
var customer = require('./controllers/customer');
var logout=require('./controllers/logout');
var home=require('./controllers/home');
//var registartion=require('./controllers/registration');
var ejs = require('ejs');

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();

//configuration
app.set('view engine', 'ejs');

//middleware 
app.use(bodyParser.urlencoded({extended:true}));

 app.use(cookieParser());



app.use('/login', login);
app.use('/admin', admin);
app.use('/customer', customer);
app.use('/logout', logout);
app.use('/home',home);
//app.use('/reg',registration);

//routes
app.get('/', function(req, res){
	res.send('Welcome');
});

//server startup
app.listen(3000, function(){
	console.log('node server started at 3000!');
});