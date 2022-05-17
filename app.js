 //Specify the Port to listen on
 const port = process.env.PORT || 8080;

var express = require('express');
var path = require('path');

var createError = require('http-errors');

var session = require('express-session');
var flash = require('express-flash');
var cookieParser = require('cookie-parser');

var bodyParser = require('body-parser');

var mysql = require('mysql');

//Setup External Files
var connection  = require('./lib/db');

var homeRouter = require('./routes/index');
// var userRouter = require('./routes/user');
var adduserRouter = require('./routes/adduser');
var userRouter = require('./routes/login')
var authRouter = require('./routes/auth');
var menuRouter = require('./routes/menu');
var cartRouter = require('./routes/cart');
var checkoutRouter = require('./routes/checkout');
var orderRouter = require('./routes/order');
var adminRouter = require('./routes/admin')
const req = require('express/lib/request');

var app = express();


 
// Setup the Views Templating Engine
 app.set('views', path.join(__dirname, 'views'));
 app.set('view engine', 'ejs');
 

 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));
 app.use(express.static(path.join(__dirname, 'public')));

// Includes the css files
 app.use(express.static('public'));
 app.use('/css', express.static(__dirname + 'public/css'))

 
 
 //Session Settings
 app.use(cookieParser());
 app.use(session({ 
     cookie: { maxAge: 86400000 },
     secret: 'secret code 3245',
     resave: false,
     saveUninitialized: true
 }))
 
 app.use(flash());

 
 
 app.use('/',homeRouter);
 app.use('/user',userRouter);
 app.use('/adduser',adduserRouter);
 app.use('/auth', authRouter); 
 app.use('/menu', menuRouter);
 app.use('/cart',cartRouter);
 app.use('/checkout',checkoutRouter);
 app.use('/order',orderRouter);
 app.use('/admin',adminRouter);
 app.listen(port, () => console.log(`Listening on port ${port}..`));

 module.exports = app;