const Engineer = require('../lib/engineer.js');
const Employee = require('../lib/employee.js');

describe('Engineer', () => {
    //testing in an error is thrown for various invalid inputs
    it(`throws an error if no GitHub username is provided`, () => {
        expect(()=> {
            new Engineer('Jane Doe', 1, 'test@gmail.com');
        }).toThrow("Invalid input! Please provide a valid GitHub username");
    });

    it(`throws an error if the GitHub username is not a string`, () => {
        expect(()=> {
            new Engineer('Jane Doe', 1, 'test@gmail.com', 1);
        }).toThrow("Invalid input! Please provide a valid GitHub username");
    });

    it(`throws an error if the GitHub username is an empty string`, () => {
        expect(()=> {
            new Engineer('Jane Doe', 1, 'test@gmail.com', '');
        }).toThrow("Invalid input! Please provide a valid GitHub username");
    });

    //testing that an object with the correct properties and values is returned
    it('returns an object containing name, id, email address and GitHub username', () => {
        expect(new Engineer('Jane Doe', 1, 'test@gmail.com', 'janedoe')).toEqual(expect.objectContaining({
            name: 'Jane Doe',
            id: 1,
            email: 'test@gmail.com',
            github: 'janedoe'
        }));
    });

    //testing if the methods on the engineer class return the correct output
    describe('Employee Methods', () => {
        it('returns the value of the github property when getGithub is called on the engineer object', () => {
            let engineer = new Engineer('Jane Doe', 1, 'test@gmail.com', 'janedoe');
            expect(engineer.getGithub()).toBe('janedoe');
        });

        it('returns "engineer" when getRole is called on the engineer object', () => {
            let engineer = new Engineer('Jane Doe', 1, 'test@gmail.com', 'janedoe');
            expect(engineer.getRole()).toBe('engineer');
        });
    });

});