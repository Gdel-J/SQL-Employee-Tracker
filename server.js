//dependencies required
const mysql = require("mysql2");
const inquirer = require("inquirer");
const dbQueries = require("./db/dbQueries.js");
const dbQuery = require("./db/dbQueries.js");
const connection = require("./db/connection");


// Start server after db connection
connection.connect(err => {
    if (err) throw err;
    console.log('Database is connected.');
    console.log('WELCOME TO SQL-EMPLOYEE-TRACKER')
    start();
});




function start() {
    inquirer.prompt([{
        // Begining in the Command Line
        type: 'list',
        name: 'prompt',
        message: 'What would you like to do?',
        choices: [
            "Add Department",
            "Add Role",
            "Add Employee",
            "View Departments",
            "View Roles",
            "View Employees",
            "Update Employee Role",
            "Delete Employee",
            "Delete Role",
            "Delete Department",
            "Quit",
        ],
    
    }])
      .then((answer) => {
        console.log(answer);
        switch (answer.prompt) {
          case "View Employees":
            return viewAllEmployees();
          case "View Roles":
            return viewAllRoles();
          case "View Departments":
            return viewAllDepartments();
          case "Add Employee":
            return addEmployee();
          case "Add Role":
            return addRole();
          case "Add Department":
            return addDepartment();
          case "Update Employee Role":
            return updateEmployee();
          case "Delete Employee":
            return deleteEmployee();
          case "Delete Role":
            return deleteRole();
          case "Delete Department":
            return deleteDepartment();
          case "Quit":
            return quit();
        }
      });
  }
  async function viewAllEmployees() {
    const employee_db = await dbQuery.getAllEmployees();
    console.table(employee_db);
    start();
  }
  async function viewAllRoles() {
    const role = await dbQuery.viewAllRoles();
    console.table(role);
    start();
  }
  async function viewAllDepartments() {
    const departments = await dbQuery.viewAllDepartments();
    console.table(departments);
    start();

  }
  async function addDepartment() {
    const department = await inquirer.prompt({
      type: "input",
      message: "What is the name of the department?",
      name: "name",
    });
    await dbQuery.createDepartment(department);
    start();
  }
  async function addEmployee() {
    const rolesPrompt = await dbQuery.viewAllRoles();
    const managerPrompt = await dbQuery.getAllEmployees();
  
    const employeeToAdd = await inquirer.prompt([
      {
        type: "input",
        message: "What's the first name of the employee?",
        name: "first_name",
      },
      {
        type: "input",
        message: "What's the last name of the employee?",
        name: "last_name",
      },
    ]);
    let roleListChoices = rolesPrompt.map(({ id, title }) => ({ name: title, value: id }));
  //console.log("roleListChoices", rolesPrompt)

  const  {roleId}  = await inquirer.prompt({
    type: "list",
    name: "roleId",
    message: "What is this new employee role?",
    choices: roleListChoices,
  });
  const managerChoicesList = managerPrompt.map(({ first_name, last_name, id }) => ({ name: first_name + last_name, value: id }));
  if (managerChoicesList && managerChoicesList.length > 0){
  const { managerId } = await inquirer.prompt({
    
    type: "list",
    name: "managerId",
    message: "Please select this new employees manager:",
    choices: managerChoicesList,
      
  });
  employeeToAdd.manager_id = managerId;
  }
  
  employeeToAdd.role_id = roleId;
  

  await dbQuery.createEmployee(employeeToAdd);

  start();
}
async function addRole() {
  const departments = await dbQuery.viewAllDepartments();
  const departmentsList = departments.map(({ id, name }) => ({ name: name, value: id }));

  const roleToAdd = await inquirer.prompt([
    {
      type: "input",
      message: "What's the name of the role?",
      name: "title",
    },
    {
      type: "input",
      message: "What is the salary for this role?",
      name: "salary",
    },
    {
      type: "list",
      message: "What is the department id number?",
      name: "department_id",
      choices: departmentsList,
    },
  ]);

  await dbQuery.addRole(roleToAdd);
  start();
}
async function updateEmployee() {
  const employeePrompt = await dbQuery.getAllEmployees();

  const rolesPrompt = await dbQuery.viewAllRoles();
  console.log(rolesPrompt);

  const employeePromptToSelct = employeePrompt.map(({ id, first_name, last_name }) => ({
    name: first_name + last_name,
    value: id,
  }));

  const rolesPromptToSelect = rolesPrompt.map(({ id, title }) => ({
    name: title,
    value: id,
  }));

  const { employeeId } = await inquirer.prompt([
    {
      type: "list",
      name: "employeeId",
      message: "Select the employee whose role you wish to change:",
      choices: employeePromptToSelct,
    },
  ]);

  const { roleId } = await inquirer.prompt([
    {
      type: "list",
      name: "roleId",
      message: "What new role would you like to assign to this employee?",
      choices: rolesPromptToSelect,
    },
  ]);

  await dbQueries.updateEmployeeRole(employeeId, roleId);
  start();
}
async function deleteEmployee() {
  const employeePrompt = await dbQueries.getAllEmployees();

  const employeePromptToSelect= employeePrompt.map(({ id, first_name, last_name }) => ({
    name: first_name + last_name,
    value: id,
  }));

  const { employeeId } = await inquirer.prompt([
    {
      type: "list",
      name: "employeeId",
      message: "Which employee would you like to delete?",
      choices: employeePromptToSelect,
    },
  ]);
  await dbQueries.removeEmployee(employeeId);
  start();
}

async function deleteRole() {
  const rolesPrompt = await dbQuery.viewAllRoles();

  const rolesPromptToSelect = rolesPrompt.map(({ id, title }) => ({
    name: title,
    value: id,
  }));

  const { roleId } = await inquirer.prompt([
    {
      type: "list",
      name: "roleId",
      message: "Which role would you like to delete?",
      choices: rolesPromptToSelect,
    },
  ]);

  await dbQueries.removeRole(roleId);
  start();
}

async function deleteDepartment() {
  const departmentPrompt = await dbQueries.viewAllDepartments();

  const departmentPromptToSelect= departmentPrompt.map(({ id, name }) => ({ name: name, value: id }));

  const { departmentId }  = await inquirer.prompt({
    type: "list",
    name: "departmentId",
    message: "Which department would you like to delete?",
    choices: departmentPromptToSelect,
  });
  await dbQueries.removeDepartment(departmentId);
  start();
}
function quit() {
  process.exit();
}