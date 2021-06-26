const generateReport = require('../utils/generateReport.js');

describe("generateReport", () => {
    it("generates an empty report when there are no employees", () => {
      expect(generateReport([])).toMatchSnapshot();
    });
  
  });