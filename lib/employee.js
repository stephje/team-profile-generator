class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
        if (name === undefined || id === undefined || email === undefined) {
            throw Error("Invalid input! Please provide a valid name, id number and email address");
        } else if (typeof name !== 'string' || typeof email !== 'string' || typeof id !== 'number') {
            throw Error("Invalid input! Please provide a valid name, id number and email address");
        } else if (name === '' || email === '') {
            throw Error("Invalid input! Please provide a valid name, id number and email address"); 
        } else if (id <= 0) {
            throw Error("Invalid input! Please provide a valid name, id number and email address"); 
        }
    }
}

//name
// id
// email
// getName()
// getId()
// getEmail()
// getRole()—returns 'Employee'

module.exports  = Employee;