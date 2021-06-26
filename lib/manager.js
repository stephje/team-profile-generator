const Employee = require('../lib/employee.js');

class Manager extends Employee {
    constructor(name, id, email, office){
        super(name, id, email);
        this.office = office;

        //Error message to throw in case of empty or invalid input
        let errormessage = "Invalid input! Please provide a valid office number";

        //Handle empty or invalid input
        if (office === undefined) {
            throw Error(errormessage);
        } else if (isNaN(office)) {
            throw Error(errormessage);
        }
    };

    getOffice(){
        return this.office;
    }

    getRole(){
        return 'manager'
    }
} 

module.exports  = Manager;