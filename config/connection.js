const mysql = require('mysql2');
const dotenv = require('dotenv').config();
const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
},
    console.log(`SQL Connection established.`));
    
module.exports = db;