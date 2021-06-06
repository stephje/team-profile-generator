const Employee = require('../lib/employee.js');

describe(`Employee`, () => {

    it(`throws an error if no input is provided`, () => {
        expect(()=> {
            new Employee();
        }).toThrow("Please provide a name, id and email address");
    });

});
