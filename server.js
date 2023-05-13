//dependencies required
const mysql2 = require("mysql2");
const inquirer = require("inquirer");


// Start server after DB connection
connection.connect(err => {
    if (err) throw err;
    console.log('Database is connected.');
    Emp_tracker();
});


var emp_tracker = function () {
    inquirer.prompt([{
        // Begining in the Command Line
        type: 'list',
        name: 'prompt',
        message: 'What would you like to do?',
        choices:
         ['View All Department', 
        'View All Roles', 
        'View All Employees', 
        'Add A Department', 
        'Add A Role', 
        'Add An Employee', 
        'Update An Employee Role', 
        'Exit']
