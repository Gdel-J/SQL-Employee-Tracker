# SQL-Employee-Tracker

![MIT](https://img.shields.io/badge/license-MIT-green)


## Description

This is a CRUD (create,read,update,delete) application, using a command line Content Management System (CMS) built with Node.js, Inquirer, and MySQL. Questions are prompted in the CLI and the user's answers will modify the database.
The user can view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role delete an employee, delete a role, delete a department.


## Table of Contents 


 
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Questions](#questions)
  7. [Features](#features)
  8. [Credits](#credits)

## Installation

Check if you have Node.js installed by typing "node -v" in your command line. If node is not installed, visit the Node.js website to install.
Next, clone this project repository to your computer.
Use the command "npm install" to install dependecies.
Create a file in the root directory titled ".env" and type "PASSWORD='[YOUR PASSWORD HERE]'"
Type "mysql -u root -p" in the terminal and enter your personal MySQL password. Next, type "source schema.sql" and "source seeds.sql" (These commands will create the employee_db database and seed the database with mock data.).




First:

In order to use this project make sure to have the following programs installed on your computer:

1.VS Code

2.GitBash

3.Node.js

4.Mysql2




Second:

In order to initialize the project:


Copy Link: click the `Code` button within this GitHub SSH repository to copy link

Clone: inside GitBash, use the command `git clone paste link here`



link to application : 

https://github.com/Gdel-J/



Third: 

If you don't have the dependencies :
In the terminal, use the command `npm init -y` to initialize and create a `package.json file` .

Then you will have to install 
-some node_modules and `package-lock.json` dependencies by running `npm install `.

-to use the `Inquirer` package, ensure that you install and use Inquirer version 8.2.4. To do so, use the following command in your project folder: `npm i inquirer@8.2.4`.

You will need to install `npm i mysql2` 


you will need to run 

`mysql -u root -p`

then
`SOURCE db/schema.sql`
`SOURCE db/seeds.sql`
 to initialize the database.

Finally,You will want to run `node server.js` to start the app.



## Usage


-Open terminal in "index.js" and run the command "npm start".
-Select a desired task and follow the Inquirer prompts.
-To exit application, choose "EXIT" from task prompt list.
-Please reference the video demonstration above as needed.



The application begining:

![Screenshot 1]()
![Screenshot 2]()
![Screenshot 3]()


the walkthrough video link:


link to application : 

https://github.com/Gdel-J/



## License

This project is licensed under the MIT license.

## How to Contribute

Please contact me

## Tests

N/A

## Questions

If you have any questions about this repository, you might want to open an issue or contact me  at (email:`jesdelevecchio@gmail.com`)
Also you can find more of my work at (`https://www.github.com/Gdel-J`).

## Features

N/A


## Credits

This application has been made by Gérard Del Vecchio during the UCF bootcamp program.