const generateManagerCards = require('../utils/generateManagerCards.js');
const prettier = require('prettier');

describe('generateManagerCards', () => {
    it('generates an empty string when given an empty manager array', () => {
        const emptyManagerArray = [];
        const output = generateManagerCards(emptyManagerArray);
        const expectedOutput = ``;
        expect(output).toEqual(
            prettier.format(expectedOutput, { parser: 'html' })
        );
    });

    it('generates a single employee card when given an employee array containing one item', () => {
        const managerDetails = [
            {
                name: 'Stephanie Jenkins',
                id: 8,
                email: 's.jenkins3018@gmail.com',
                office: 8,
            },
        ];
        const output = generateManagerCards(managerDetails);
        const expectedOutput = `
            <div class="manager card">
            <header>
                <h2 class="name">Stephanie Jenkins</h2>
                <h3><i class="fas fa-clipboard-list"></i> Manager</h3>
            </header>
            <ul>
                <li>ID: <span class="id">8</span></li>
                <li>Email: <span class="email">s.jenkins3018@gmail.com</span></li>
                <li>Office: <span class="office">8</span></li>
            </ul>
            </div>
            `;
        expect(output).toEqual(
            prettier.format(expectedOutput, { parser: 'html' })
        );
    });

    it('generates two employee cards when given an employee array containing two items', () => {
        const managerDetails = [
            {
                name: 'Stephanie Jenkins',
                id: 8,
                email: 's.jenkins3018@gmail.com',
                office: 8,
            },
            {
                name: 'Jane Doe',
                id: 5,
                email: 'janedoe@gmail.com',
                office: 9,
            },
        ];
        const output = generateManagerCards(managerDetails);
        const expectedOutput = `
            <div class="manager card">
            <header>
                <h2 class="name">Stephanie Jenkins</h2>
                <h3><i class="fas fa-clipboard-list"></i> Manager</h3>
            </header>
            <ul>
                <li>ID: <span class="id">8</span></li>
                <li>Email: <span class="email">s.jenkins3018@gmail.com</span></li>
                <li>Office: <span class="office">8</span></li>
            </ul>
            </div>
            <div class="manager card">
            <header>
                <h2 class="name">Jane Doe</h2>
                <h3><i class="fas fa-clipboard-list"></i> Manager</h3>
            </header>
            <ul>
                <li>ID: <span class="id">5</span></li>
                <li>Email: <span class="email">janedoe@gmail.com</span></li>
                <li>Office: <span class="office">9</span></li>
            </ul>
            </div>
            `;
        expect(output).toEqual(
            prettier.format(expectedOutput, { parser: 'html' })
        );
    });
});