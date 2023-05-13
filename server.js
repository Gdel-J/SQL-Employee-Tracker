//dependencies required
const mysql2 = require("mysql2");
const inquirer = require("inquirer");


// Start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database is connected.');
    Emp_tracker();
});