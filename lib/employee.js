class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
        if (name === undefined || id === undefined || email === undefined) {
            throw Error("Please provide a name, id and email address");
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