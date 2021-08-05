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

    it('generates a single engineer card when given an array containing one item', () => {
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
            <li>
              <span>Email:</span
              ><a href="mailto:stephaniejenkins@company.com"
                >stephaniejenkins@company.com</a
              >
            </li>
            <li>
              <span>GitHub:</span
              ><a href="https://github.com/stephje">stephje</a>
            </li>
          </ul>
        </div>
            `;
        expect(output).toEqual(
            prettier.format(expectedOutput, { parser: 'html' })
        );
    });

    it('generates two engineer cards when given an array containing two items', () => {
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
            <li>
              <span>Email:</span
              ><a href="mailto:stephaniejenkins@company.com"
                >stephaniejenkins@company.com</a
              >
            </li>
            <li>
              <span>GitHub:</span
              ><a href="https://github.com/stephje">stephje</a>
            </li>
          </ul>
        </div>
        <div class="engineer card">
          <header>
            <h2 class="name">Jane Doe</h2>
            <h3><i class="fas fa-laptop-code"></i> Engineer</h3>
          </header>
          <ul>
            <li><span>ID:</span>5</li>
            <li>
              <span>Email:</span
              ><a href="mailto:janedoe@company.com">janedoe@company.com</a>
            </li>
            <li>
              <span>GitHub:</span
              ><a href="https://github.com/janedoe">janedoe</a>
            </li>
          </ul>
        </div>
            `;
        expect(output).toEqual(
            prettier.format(expectedOutput, { parser: 'html' })
        );
    });
});
