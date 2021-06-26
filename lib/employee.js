//class employee contains properties that are shared between all types of employees as well as functions that return the values of those properties. 
class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;

        //Error message to throw in case of empty or invalid input
        let errormessage = "Invalid input! Please provide a valid name, id number and email address";
        
        //Handle empty or invalid input
        if (name === undefined || id === undefined || email === undefined) {
            throw Error(errormessage);
        } else if (typeof name !== 'string' || typeof email !== 'string' || isNaN(id)) {
            throw Error(errormessage);
        } else if (name === '' || email === '') {
            throw Error(errormessage); 
        } else if (id <= 0) {
            throw Error(errormessage); 
        }
    };

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }
    
    //this will be overwritten in other class types
    getRole(){
        return 'employee'
    }

}

module.exports  = Employee;