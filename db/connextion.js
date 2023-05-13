const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    // Your MySQL username,
    user: 'root',
    // Replace with your MySQL password
    password: 'put yourPassword',
    database: 'employee_tracker_db'
});

module.exports = db;