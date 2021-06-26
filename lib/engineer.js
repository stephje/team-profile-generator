const Employee = require('../lib/employee.js');

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;

        //Error message to throw in case of empty or invalid input
        let errormessage = "Invalid input! Please provide a valid GitHub username";

        //Handle empty or invalid input
        if (github === undefined) {
            throw Error(errormessage);
        } else if (typeof github !== 'string') {
            throw Error(errormessage);
        } else if (github === '') {
            throw Error(errormessage);
        }
    };

    getGithub(){
        return this.github;
    }

    getRole(){
        return 'engineer'
    }
} 

module.exports  = Engineer;