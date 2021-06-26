const generateInternCards = require('../utils/generateInternCards.js');
const prettier = require('prettier');

describe('generateInternCards', () => {
    it('generates an empty string when given an empty intern array', () => {
        const emptyInternArray = [];
        const output = generateInternCards(emptyInternArray);
        const expectedOutput = ``;
        expect(output).toEqual(
            prettier.format(expectedOutput, { parser: 'html' })
        );
    });

    it('generates a single employee card when given an employee array containing one item', () => {
        const internDetails = [
            {
                name: 'Stephanie Jenkins',
                id: 8,
                email: 'stephaniejenkins@company.com',
                school: 'UWA',
            },
        ];
        const output = generateInternCards(internDetails);
        const expectedOutput = `
            <div class="intern card">
            <header>
                <h2 class="name">Stephanie Jenkins</h2>
                <h3><i class="fas fa-graduation-cap"></i> Intern</h3>
            </header>
            <ul>
                <li><span>ID:</span>8</li>
                <li><span>Email:</span>stephaniejenkins@company.com</li>
                <li><span>School:</span>UWA</li>
            </ul>
            </div>
            `;
        expect(output).toEqual(
            prettier.format(expectedOutput, { parser: 'html' })
        );
    });

    it('generates two employee cards when given an employee array containing two items', () => {
        const internDetails = [
            {
                name: 'Stephanie Jenkins',
                id: 8,
                email: 'stephaniejenkins@company.com',
                school: 'UWA',
            },
            {
                name: 'Jane Doe',
                id: 5,
                email: 'janedoe@company.com',
                school: 'ECU',
            },
        ];
        const output = generateInternCards(internDetails);
        const expectedOutput = `
            <div class="intern card">
            <header>
                <h2 class="name">Stephanie Jenkins</h2>
                <h3><i class="fas fa-graduation-cap"></i> Intern</h3>
            </header>
            <ul>
                <li><span>ID:</span>8</li>
                <li><span>Email:</span>stephaniejenkins@company.com</li>
                <li><span>School:</span>UWA</li>
            </ul>
            </div>
            <div class="intern card">
            <header>
                <h2 class="name">Jane Doe</h2>
                <h3><i class="fas fa-graduation-cap"></i> Intern</h3>
            </header>
            <ul>
                <li><span>ID:</span>5</li>
                <li><span>Email:</span>janedoe@company.com</li>
                <li><span>School:</span>ECU</li>
            </ul>
            </div>
            `;
        expect(output).toEqual(
            prettier.format(expectedOutput, { parser: 'html' })
        );
    });
});