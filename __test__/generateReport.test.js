const generateReport = require('../utils/generateReport.js');

const managerArray = [{
  name: 'John Doe',
  id: 3,
  email: 'johndoe@company.com',
  office: 1
}];

const engineerArray = [{
  name: 'Jane Doe',
  id: 5,
  email: 'janedoe@company.com',
  github: 'janedoe'
}];

const internArray = [{        
  name: 'Stephanie Jenkins',
  id: 8,
  email: 'stephje@company.com',
  school: 'UWA'
}];

describe("generateReport", () => {
  
    it("generates a report containing employee data when given employee data", () => {
      expect(generateReport(managerArray, engineerArray, internArray)).toMatchSnapshot();
    });
  
  });