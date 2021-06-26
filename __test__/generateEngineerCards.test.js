const generateEngineerCards = require('../utils/generateEngineerCards.js');
const prettier = require('prettier');

describe('generateEngineerCards', () => {
    it('generates an empty string when given an empty engineer array', () => {
        const emptyEngineerArray = [];
        const output = generateEngineerCards(emptyEngineerArray);
        const expectedOutput = ``;
        expect(output).toEqual(
            prettier.format(expectedOutput, { parser: 'html' })
        );
    });

    it('generates a single employee card when given an employee array containing one item', () => {
        const engineerDetails = [
            {
                name: 'Stephanie Jenkins',
                id: 8,
                email: 'stephaniejenkins@company.com',
                github: 'stephje',
            },
        ];
        const output = generateEngineerCards(engineerDetails);
        const expectedOutput = `
            <div class="engineer card">
            <header>
                <h2 class="name">Stephanie Jenkins</h2>
                <h3><i class="fas fa-laptop-code"></i> Engineer</h3>
            </header>
            <ul>
                <li><span>ID:</span>8</li>
                <li><span>Email:</span>stephaniejenkins@company.com</li>
                <li><span>GitHub:</span>stephje</li>
            </ul>
            </div>
            `;
        expect(output).toEqual(
            prettier.format(expectedOutput, { parser: 'html' })
        );
    });

    it('generates two employee cards when given an employee array containing two items', () => {
        const engineerDetails = [
            {
                name: 'Stephanie Jenkins',
                id: 8,
                email: 'stephaniejenkins@company.com',
                github: 'stephje',
            },
            {
                name: 'Jane Doe',
                id: 5,
                email: 'janedoe@company.com',
                github: 'janedoe',
            },
        ];
        const output = generateEngineerCards(engineerDetails);
        const expectedOutput = `
            <div class="engineer card">
            <header>
                <h2 class="name">Stephanie Jenkins</h2>
                <h3><i class="fas fa-laptop-code"></i> Engineer</h3>
            </header>
            <ul>
                <li><span>ID:</span>8</li>
                <li><span>Email:</span>stephaniejenkins@company.com</li>
                <li><span>GitHub:</span>stephje</li>
            </ul>
            </div>
            <div class="engineer card">
            <header>
                <h2 class="name">Jane Doe</h2>
                <h3><i class="fas fa-laptop-code"></i> Engineer</h3>
            </header>
            <ul>
                <li><span>ID:</span>5</li>
                <li><span>Email:</span>janedoe@company.com</li>
                <li><span>GitHub:</span>janedoe</li>
            </ul>
            </div>
            `;
        expect(output).toEqual(
            prettier.format(expectedOutput, { parser: 'html' })
        );
    });
});