const inquirer = require('inquirer');
const Employee = require('./lib/employee.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');
const Manager = require('./lib/manager.js');

const employeeArray = [];

const questions = [
    {
        name: 'name',
        type: 'input',
        message: 'Full name: ',
    },
    {
        name: 'id',
        type: 'input',
        message: 'ID number: ',
    },
    {
        name: 'email',
        type: 'input',
        message: 'Email address: ',
    },
    {
        name: 'role',
        type: 'list',
        choices: ['Employee', 'Manager', 'Engineer', 'Intern'],
        message: 'Role: ',
    },
    {
        name: 'office',
        type: 'input',
        message: 'Office number:',
        when: employee => employee.role === 'Manager',
    },
    {
        name: 'github',
        type: 'input',
        message: 'GitHub username: ',
        when: employee => employee.role === 'Engineer',
    },
    {
        name: 'school',
        type: 'input',
        message: 'School: ',
        when: employee => employee.role === 'Intern',
    },
];

async function requestEmployeeData() {

    //prompt user for information about the employee
    let employeeData = await inquirer.prompt(questions);

    //depending on the role specified by the user, create a new instance of the appropriate class and store in an array
    switch (employeeData.role) {
        case 'Employee':
            let newEmployee = new Employee(employeeData.name, Number(employeeData.id), employeeData.email);
            employeeArray.push(newEmployee);
            console.log(employeeArray);
            break;
        case 'Manager':
            let newManager = new Manager(employeeData.name, Number(employeeData.id), employeeData.email, Number(employeeData.office));
            employeeArray.push(newManager);
            console.log(employeeArray);
            break;
        case 'Engineer':
            let newEngineer = new Engineer(employeeData.name, Number(employeeData.id), employeeData.email, employeeData.github);
            employeeArray.push(newEngineer);
            console.log(employeeArray);
            break;
        case 'Intern':
            let newIntern = new Intern(employeeData.name, Number(employeeData.id), employeeData.email, employeeData.school);
            employeeArray.push(newIntern);
            console.log(employeeArray);
            break;
    }

    //ask if user wants to add another employee
    const answers = await inquirer.prompt([
        {
            name: 'repeat',
            type: 'confirm',
            message: 'Do you want to add another employee?',
            default: false,
        },
    ]);
    if (answers.repeat === true) {
        requestEmployeeData();
    } else {
        //TO DO - WRITE THIS FUNCTION
        generateReport(employeeArray);
    }
}


async function main() {

    const choice = await inquirer.prompt({
        name: 'action',
        type: 'list',
        choices: ['ADD AN EMPLOYEE', 'EXIT'],
        message: 'What do you want to do?'
    });
    
    if(choice.action === 'EXIT') {
        //if there is at least one employee in the employee array, generate report (this could occur if user acccidentally goes back to the main menu and then decides to quit without entering any further employees)
        if(employeeArray.length > 0){
            generateReport(employeeArray);
        } 
        return;
    }
    
    requestEmployeeData();
    
}

main();


//TO-DO
//1. Ask user questions about team members using inquirer, and produce a data structure containing the team's members -- DONE
// Construct Manager, Intern and Engineer -- DONE
// Use ES6 syntactic sugar instead of functional constructor
// 1a. Ask user questions to learn about their team -- DONE
//employee: name id email -- DONE
// manager: officenumber -- DONE
// Engineer: github username -- DONE
// intern: school -- DONE
// 1b. Using information about each member, construct an object representing a team member (these constructors or classes should have tests) -- DONE
//i. Write tests for Employee, one test at a time -- DONE
//ii. Write tests for Manager -- DONE
//iii. Write tests for Intern -- DONE
//iv. Write tests for Engineer -- DONE
// 1c. Add the new team member object to a collection of team members
// 1d. Return the collection of team member objects

//2. Write team report (use cookbook example)
//Generates an empty report when there are no employees
//Generates a report given a single employee entry
//Generates report with 1 employee entry when given a list containing a single employee
//Generates an empty string when no employee is provided
//Generates an empty employee entry when given an employee with no data
//Generates an employee entry with employee data

//3. Produce a file from the content in Step 2
