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
                email: 's.jenkins3018@gmail.com',
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
                <li>ID: <span class="id">8</span></li>
                <li>Email: <span class="email">s.jenkins3018@gmail.com</span></li>
                <li>School: <span class="school">UWA</span></li>
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
                email: 's.jenkins3018@gmail.com',
                school: 'UWA',
            },
            {
                name: 'Jane Doe',
                id: 5,
                email: 'janedoe@gmail.com',
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
                <li>ID: <span class="id">8</span></li>
                <li>Email: <span class="email">s.jenkins3018@gmail.com</span></li>
                <li>School: <span class="school">UWA</span></li>
            </ul>
            </div>
            <div class="intern card">
            <header>
                <h2 class="name">Jane Doe</h2>
                <h3><i class="fas fa-graduation-cap"></i> Intern</h3>
            </header>
            <ul>
                <li>ID: <span class="id">5</span></li>
                <li>Email: <span class="email">janedoe@gmail.com</span></li>
                <li>School: <span class="school">ECU</span></li>
            </ul>
            </div>
            `;
        expect(output).toEqual(
            prettier.format(expectedOutput, { parser: 'html' })
        );
    });
});