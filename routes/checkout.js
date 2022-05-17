const { Route } = require('express');
var express = require('express');
var router = express.Router();
var connection  = require('../lib/db');

router.get('/myCart', function(req, res, next){
    connection.query(`SELECT * FROM restaurant.usercart WHERE user_nm = '${req.session.user_nm}'`, function(err, rows, fields) {
        if(err) throw err
        if(req.session.loggedin == true){
        res.render('checkout',{
           title: "Check Out",
           data: rows,
           user: req.session.userid
        });
       }
    });
});

router.get('/delete/:id', function(req, res, next) {
      
    connection.query('DELETE FROM usercart WHERE id ='+ req.params.id, function(err,row)     {
    
           if(err) throw err  
           res.redirect('/menu');         
            });
 });


module.exports = router;