const { Route } = require('express');
var express = require('express');
var router = express.Router();
var connection  = require('../lib/db');
 
 
/* GET login page. */

router.get('/login', function(req, res, next){
        res.render('login',{
            title:'Login',
            // users: rows
        });
    });

router.get('/adminlogin', function(req, res, next){
    res.render('adminlog',{
        title:'Admin',
        // users: rows
    });
});

module.exports = router;
