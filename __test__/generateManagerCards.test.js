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

    it('generates a single manager card when given an array containing one item', () => {
        const managerDetails = [
            {
                name: 'Stephanie Jenkins',
                id: 8,
                email: 'stephaniejenkins@company.com',
                office: 1,
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
            <li><span>ID:</span>8</li>
            <li>
              <span>Email:</span
              ><a href="mailto:stephaniejenkins@company.com"
                >stephaniejenkins@company.com</a
              >
            </li>
            <li><span>Office:</span>1</li>
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
                email: 'stephaniejenkins@company.com',
                office: 1,
            },
            {
                name: 'Jane Doe',
                id: 5,
                email: 'janedoe@company.com',
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
            <li><span>ID:</span>8</li>
            <li>
              <span>Email:</span
              ><a href="mailto:stephaniejenkins@company.com"
                >stephaniejenkins@company.com</a
              >
            </li>
            <li><span>Office:</span>1</li>
          </ul>
        </div>
        <div class="manager card">
          <header>
            <h2 class="name">Jane Doe</h2>
            <h3><i class="fas fa-clipboard-list"></i> Manager</h3>
          </header>
          <ul>
            <li><span>ID:</span>5</li>
            <li>
              <span>Email:</span
              ><a href="mailto:janedoe@company.com">janedoe@company.com</a>
            </li>
            <li><span>Office:</span>9</li>
          </ul>
        </div>
            `;
        expect(output).toEqual(
            prettier.format(expectedOutput, { parser: 'html' })
        );
    });
});