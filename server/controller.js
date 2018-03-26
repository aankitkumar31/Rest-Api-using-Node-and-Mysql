var express = require('express');
var router = express.Router();
var app = require('./server');
var connection = require('./config');

router.get('/customer', function (req, res) {
    connection.query('select * from customer', function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    });
});

module.exports = router;