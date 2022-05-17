var express = require('express');
const res = require('express/lib/response');
var router = express.Router();
var connection  = require('../lib/db');
 
 
/* GET users page. */
router.get('/user', (req, res)=>{
    // res.send("NOTES ON PROJECTS");
    let sql = 'SELECT * FROM restaurant.users';
    let query = connection.query(sql, (err, rows)=>{
        if(err) throw err
        // res.send(rows)
        // res.send(rows)
        res.render('adduser',{
            title:'Add User',
            users: rows
        });
    });
});


router.post('/adduser', function(req, res) {
    let data = {
                    first_nm: req.body.first_nm,
                    last_nm: req.body.last_nm,
                    email: req.body.email,
                    user_nm: req.body.user_nm,
                    password: req.body.password,
                    credit_cd_num: req.body.card                 
                }  
    let sqlQuery = "INSERT INTO users SET ?" 
    let vQuery = connection.query(sqlQuery,data, function(err,result){
                if(err) throw err
                res.redirect('/');   
            });        
});

module.exports = router;
