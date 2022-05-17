const { Route } = require('express');
var express = require('express');
var router = express.Router();
var connection  = require('../lib/db');


router.post('/addToCart',function(req,res){
    // let id = req.body.id;

    let data = {
                 user_nm: req.body.username,
                 description: req.body.description,
                 price: req.body.price,
                 food_id: req.body.id
               }

    let sqlQuery = "INSERT INTO usercart SET ?"
    
    connection.query(sqlQuery, data, function(err, result){
        if(err) throw err;
        // Once completed; this route should redirect to the Cart view
        res.redirect('/menu');
    });
});
module.exports = router;