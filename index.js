const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/employee.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');
const Manager = require('./lib/manager.js');
const generateReport = require('./utils/generateReport.js')

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
        choices: ['Manager', 'Engineer', 'Intern'],
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
        let generatedReport = generateReport(employeeArray);
        writeToFile('./dist/index.html', generatedReport);
    }
}

// Write file
function writeToFile(filePath, generatedReport) {
    //A conditional using a ternary operator. Condition is 'if there is an error', if truthy the error is logged to the console, if falsy then "Success!" is logged to the console
    fs.writeFile(filePath, generatedReport, err =>
        err
            ? console.error(err)
            : console.log('File generated successfully')
    );
}


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
    
    requestEmployeeData();

}

main();