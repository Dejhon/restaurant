var express = require('express');
const res = require('express/lib/response');
var router = express.Router();
var connection  = require('../lib/db')

router.post('/orders', function(req, res) {

    orderNumber = Math.floor(Math.random() *100) + new Date().toJSON().slice(0,10).split('-').reverse().join('')
    let data = {
                    user_nm: req.session.user_nm,
                    order: req.body.description,
                    order_num:orderNumber,
                    price: req.body.price,  
                    quantity: req.body.quant,
                    total: req.body.price * req.body.quant            
                }  
    let sqlQuery = "INSERT INTO orders SET ?" 
    let vQuery = connection.query(sqlQuery,data, function(err,result){
                if(err) throw err
                res.redirect('/menu');   
            });        
});

module.exports = router;
