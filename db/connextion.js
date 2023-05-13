const mysql = require('mysql2');

const connection = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    // Your MySQL username,
    user: 'root',
    // Replace with your MySQL password
    password: 'put your Password',
    database: 'employee_db'
});

connection.connect();

connection.query = util.promisify(connection.query);

module.exports = connection;