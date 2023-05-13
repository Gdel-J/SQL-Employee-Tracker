const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    // Your MySQL username,
    user: 'root',
    // Replace with your MySQL password
    password: 'put your Password',
    database: 'employee_db'
});

module.exports = db;