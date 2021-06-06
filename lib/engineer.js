const Employee = require('../lib/employee.js');

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;

        let errormessage = "Invalid input! Please provide a valid GitHub username";

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