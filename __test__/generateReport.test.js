const generateReport = require('../utils/generateReport.js');

const employeeDetails = {
  name: 'Stephanie Jenkins',
  id: 8,
  email: 's.jenkins3018@gmail.com',
  office: 8
};

describe("generateReport", () => {
    it("generates an empty report when there are no employees", () => {
      expect(generateReport([])).toMatchSnapshot();
    });

    it("generates a report containing a manger when given a manager", () => {
      expect(generateReport([employeeDetails])).toMatchSnapshot();
    });
  
  });