//mysql js

const express = require('express');
const routes = express.Router();
const mysql = require('mysql');
const router = require("../routes");

router.get('/',(req, res) => {
    const connection = mysql.createConnection({
        host: '172.16.49.128',
        user: 'root',
        port:'3306',
        password: 'dockermysql12##',
        database: 'nodeDB'
    });

    connection.connect((err) => {
        if(err) throw err;
        console.log('Connected to the database');

        connection.query('SELECT * FROM nodeDB', (err, rows, fields) => {
            if(err) throw err;

            res.send(rows);
            connection.end();
        });
    });
})

module.exports= router;