const prettier = require('prettier');

function generateEngineerCards(engineerArray) {
    //return empty string if the engineer array is empty
    if (engineerArray.length === 0) return "";

    const cards = [];

    //for each engineer in the engineer array, extract the individual data items and insert into a template literal, format it as html using prettier, and push into the cards array. 
    engineerArray.forEach(engineer => {
        let name = engineer.name;
        let id = engineer.id;
        let email = engineer.email;
        let github = engineer.github;
        
        let card = prettier.format(
            `
            <div class="engineer card">
            <header>
                <h2 class="name">${name}</h2>
                <h3><i class="fas fa-laptop-code"></i> Engineer</h3>
            </header>
            <ul>
                <li><span>ID:</span>${id}</li>
                <li><span>Email:</span><a href="mailto:${email}">${email}</a></li>
                <li><span>GitHub:</span><a href="https://github.com/${github}">${github}</a></li>
            </ul>
            </div>
            `,
            { parser: 'html' }
        );

        cards.push(card);
    });

    //join all items in the array and return them
    return cards.join("");
}

module.exports = generateEngineerCards;
