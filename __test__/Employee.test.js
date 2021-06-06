const Employee = require('../lib/employee.js');

describe(`Employee`, () => {

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

});
