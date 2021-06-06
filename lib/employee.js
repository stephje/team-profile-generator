//class employee contains properties that are shared between all types of employees as well as functions that return the values of those properties. 
class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;

        let errormessage = "Invalid input! Please provide a valid name, id number and email address";
        
        if (name === undefined || id === undefined || email === undefined) {
            throw Error(errormessage);
        } else if (typeof name !== 'string' || typeof email !== 'string' || typeof id !== 'number') {
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