const Intern = require('../lib/intern.js');
const Employee = require('../lib/employee.js');

describe('Intern', () => {
    //testing in an error is thrown for various invalid inputs
    it(`throws an error if no school name is provided`, () => {
        expect(()=> {
            new Intern('Jane Doe', 1, 'test@gmail.com');
        }).toThrow("Invalid input! Please provide a valid school name");
    });

    it(`throws an error if the school name is not a string`, () => {
        expect(()=> {
            new Intern('Jane Doe', 1, 'test@gmail.com', 1);
        }).toThrow("Invalid input! Please provide a valid school name");
    });

    it(`throws an error if the school name is an empty string`, () => {
        expect(()=> {
            new Intern('Jane Doe', 1, 'test@gmail.com', '');
        }).toThrow("Invalid input! Please provide a valid school name");
    });

    //testing that an object with the correct properties and values is returned
    it('returns an object containing name, id, email address and school name', () => {
        expect(new Intern('Jane Doe', 1, 'test@gmail.com', 'janedoe')).toEqual(expect.objectContaining({
            name: 'Jane Doe',
            id: 1,
            email: 'test@gmail.com',
            school: 'janedoe'
        }));
    });

    //testing if the methods on the intern class return the correct output
    describe('Employee Methods', () => {
        it('returns the value of the school property when getSchool is called on the intern object', () => {
            let intern = new Intern('Jane Doe', 1, 'test@gmail.com', 'janedoe');
            expect(intern.getSchool()).toBe('janedoe');
        });

        it('returns "intern" when getRole is called on the intern object', () => {
            let intern = new Intern('Jane Doe', 1, 'test@gmail.com', 'janedoe');
            expect(intern.getRole()).toBe('intern');
        });
    });

});