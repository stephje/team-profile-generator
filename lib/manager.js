const Employee = require('../lib/employee.js');

class Manager extends Employee {
    constructor(name, id, email, office){
        super(name, id, email);
        this.office = office;

        let errormessage = "Invalid input! Please provide a valid office number";

        if (office === undefined) {
            throw Error(errormessage);
        } else if (typeof office !== 'number') {
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