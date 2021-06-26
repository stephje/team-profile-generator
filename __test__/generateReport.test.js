const generateReport = require('../utils/generateReport.js');

const employeeDetails = [
  {        
    name: 'Stephanie Jenkins',
    id: 8,
    email: 'stephje@company.com',
    school: 'UWA'
  },
  {
    name: 'Jane Doe',
    id: 5,
    email: 'janedoe@company.com',
    github: 'janedoe'
  },
  {
    name: 'John Doe',
    id: 3,
    email: 'johndoe@company.com',
    office: 1
  }
];

describe("generateReport", () => {
    it("generates an empty report when there are no employees", () => {
      expect(generateReport([])).toMatchSnapshot();
    });

    it("generates a report containing employee data when given employee data", () => {
      expect(generateReport(employeeDetails)).toMatchSnapshot();
    });
  
  });