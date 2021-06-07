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

async function main() {
    
    const choice = await inquirer.prompt({
        name: 'action',
        type: 'list',
        choices: ['ADD AN EMPLOYEE', 'EXIT'],
        message: 'What do you want to do?'
    });
    
    if(choice.action === 'EXIT') {
        return;
    }

    const employeeData = await inquirer.prompt(questions);
    console.log(employeeData)
    //create new instance of employee
    //Add to array
    // employeeArray.push();

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
        console.log(employeeArray);
        main();
    } else {
        console.log(employeeArray);
    }
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
