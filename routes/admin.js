const read = require('body-parser/lib/read');
const { Route } = require('express');
var express = require('express');
const { get } = require('express/lib/response');
const { connect } = require('../lib/db');
const conn = require('../lib/db');
var router = express.Router();
var connection  = require('../lib/db');

router.get('/', function(req, res, next){
    let sql = "SELECT * FROM orders";
    connection.query(sql, (err, orderRecords)=>{
        if(err) throw err
        req.session.loggedin = true,
        res.render('vieworders',{
            title:"Orders",
            data: orderRecords,
            user: req.session.admin_user_nm
        });
    });
});

router.get('/editOrder/:id', function(req, res, next){
    let id = req.params.id
    connection.query(`SELECT * FROM orders WHERE id = ${id}`, function(err, row){
        if(err) throw err;
        if(req.session.loggedin == true){
        res.render('orderedit',{
            title: "Edit Orders",
            orders: row         
        })
       }
    })
})

router.post('/updateOrder/', function(req, res, next) {
    const id = req.body.order_id;  
    let data={
        order_confirm: req.body.order_Con
    }  
    let sql = `UPDATE orders SET ? WHERE id = ${id}`; 
    conn.query(sql,data, (err,result)=>{
        if(err) throw err;
            res.redirect('/admin');
    });
});
module.exports = router;