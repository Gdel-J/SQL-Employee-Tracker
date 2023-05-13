USE employee_db;

-- Inserts names of departments into department table
INSERT INTO  department (name)
VALUES 
("Sales"),
("Engineering"),
("Finance"),
("Legal");

-- Inserts roles of employeee into role table
INSERT INTO role
 (title, salary, department_id)

VALUES 
("Sales Lead",100000, 1),
("Lead Engineer", 150000, 2 ),
("Software Engineer", 120000,2),
("Accountant", 125000,3),
("Legal Team Lead", 250000,4);

-- Inserts employee information into employee table
INSERT INTO employee 
(first_name,last_name, role_id, manager_id)
VALUES
("John","Doe", 1, 3),
("Mike", "Chan", 2, 1),
( "Asley","Rodriguez", 3, null),
("Kevin", "Tupik", 4, 3),
("Kunal", "Singh", 1, 2),
("Malia", "Brown", 5, null),
("Sarah", "Lourd", 2, null),
("Tom", "Allen", 4, 7);
