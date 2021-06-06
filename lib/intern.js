const Employee = require('../lib/employee.js');

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;

        let errormessage = "Invalid input! Please provide a valid school name";

        if (school === undefined) {
            throw Error(errormessage);
        } else if (typeof school !== 'string') {
            throw Error(errormessage);
        } else if (school === '') {
            throw Error(errormessage);
        }
    };

    getSchool(){
        return this.school;
    }

    getRole(){
        return 'intern'
    }
} 

module.exports  = Intern;