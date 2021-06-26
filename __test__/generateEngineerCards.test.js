const generateManagerCards = require('../utils/generateManagerCards.js');
const prettier = require("prettier");

describe("generateEmployeeCards", () => {
    it ("generates an empty string when given an empty array", () => {
        const emptyEmployeeArray= [];
        const output = generateManagerCards(emptyEmployeeArray);
        const expectedOutput = ``;
        expect(output).toEqual(prettier.format(expectedOutput, { parser: "html"}));
    });
});