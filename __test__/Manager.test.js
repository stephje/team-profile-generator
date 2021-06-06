const Manager = require('../lib/manager.js');
const Employee = require('../lib/employee.js');

describe('Manager', () => {
    //testing if an error is thrown for various invalid inputs
    it(`throws an error if no office number is provided`, () => {
        expect(()=> {
            new Manager('Jane Doe', 1, 'test@gmail.com');
        }).toThrow("Invalid input! Please provide a valid office number");
    });

    it(`throws an error if the office number is not a number`, () => {
        expect(()=> {
            new Manager('Jane Doe', 1, 'test@gmail.com', 'one');
        }).toThrow("Invalid input! Please provide a valid office number");
    });

    //testing that an object with the correct properties and values is returned
    it('returns an object containing name, id, email address and office number', () => {
        expect(new Manager('Jane Doe', 1, 'test@gmail.com', 1)).toEqual(expect.objectContaining({
            name: 'Jane Doe',
            id: 1,
            email: 'test@gmail.com',
            office: 1
        }));
    });

    //testing if the methods on the manager class return the correct output
    describe('Employee Methods', () => {
        it('returns the value of the office property when getOffice is called on the manager object', () => {
            let manager = new Manager('Jane Doe', 1, 'test@gmail.com', 1);
            expect(manager.getOffice()).toBe(1);
        });

        it('returns "manager" when getRole is called on the manager object', () => {
            let manager = new Manager('Jane Doe', 1, 'test@gmail.com', 1);
            expect(manager.getRole()).toBe('manager');
        });
    });

});