const read = require('body-parser/lib/read');
const { Route } = require('express');
var express = require('express');
const { get } = require('express/lib/response');
const { connect } = require('../lib/db');
const conn = require('../lib/db');
var router = express.Router();
var connection  = require('../lib/db');

router.get('/', function(req, res, next){
    // let username = req.session.user_nm;
    category = 1;
    categoryL = 2;
    categoryD = 3;
    let sql = `SELECT * FROM menu`;
    // let lsql = `SELECT * FROM menu WHERE category_id = ${categoryL}`;
    connection.query(sql, (err, menuRecords)=>{
        if(err) throw err
        res.render('menu',{
            data: menuRecords,
            user: req.session.user_nm
        });
    });
});

module.exports = router;
