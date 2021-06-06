const Employee = require('../lib/employee.js');

describe(`Employee`, () => {

    //testing if an error is thrown for various invalid inputs
    it(`throws an error if no input is provided`, () => {
        expect(()=> {
            new Employee();
        }).toThrow("Invalid input! Please provide a valid name, id number and email address");
    });

    it('throws an error if name is not a string', () => {
        expect(() => {
            new Employee(1, 1, 'test@gmail.com');
        }).toThrow("Invalid input! Please provide a valid name, id number and email address");
    });

    it('throws an error if email address is not a string', () => {
        expect(() => {
            new Employee('Jane Doe', 1, 1);
        }).toThrow("Invalid input! Please provide a valid name, id number and email address");
    });

    it('throws an error if id is not a number', () => {
        expect(() => {
            new Employee('Jane Doe', 'one', 'test@gmail.com');
        }).toThrow("Invalid input! Please provide a valid name, id number and email address");
    });

    it('throws an error if name is an empty string', () => {
        expect(() => {
            new Employee('', 1, 'test@gmail.com');
        }).toThrow("Invalid input! Please provide a valid name, id number and email address");
    });

    it('throws an error if email address is an empty string', () => {
        expect(() => {
            new Employee('Jane Doe', 1, '');
        }).toThrow("Invalid input! Please provide a valid name, id number and email address");
    });

    it('throws an error if id is equal to 0', () => {
        expect(() => {
            new Employee('Jane Doe', 0, 'test@gmail.com');
        }).toThrow("Invalid input! Please provide a valid name, id number and email address");
    });

    it('throws an error if id is less than 0', () => {
        expect(() => {
            new Employee('Jane Doe', 0, 'test@gmail.com');
        }).toThrow("Invalid input! Please provide a valid name, id number and email address");
    });

    //testing that an object with the correct properties and values is returned
    it('returns an object containing name, id and email address', () => {
        expect(new Employee('Jane Doe', 1, 'test@gmail.com')).toEqual(expect.objectContaining({
            name: 'Jane Doe',
            id: 1,
            email: 'test@gmail.com'
        }));
    });

    //testing if the methods on the employee class return the correct output
    describe('Employee Methods', () => {
        it('returns the value of the name property when getName is called on the employee object', () => {
            let employee = new Employee('Jane Doe', 1, 'test@gmail.com');
            expect(employee.getName()).toBe('Jane Doe');
        });

        it('returns the value of the id property when getId is called on the employee object', () => {
            let employee = new Employee('Jane Doe', 1, 'test@gmail.com');
            expect(employee.getId()).toBe(1);
        });

        it('returns the value of the email property when getEmail is called on the employee object', () => {
            let employee = new Employee('Jane Doe', 1, 'test@gmail.com');
            expect(employee.getEmail()).toBe('test@gmail.com');
        });

        it('returns "employee" when getRole is called on the employee object', () => {
            let employee = new Employee('Jane Doe', 1, 'test@gmail.com');
            expect(employee.getRole()).toBe('employee');
        });
    });

});