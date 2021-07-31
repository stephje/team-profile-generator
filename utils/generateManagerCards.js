const prettier = require('prettier');

function generateManagerCards(managerArray) {
    //return empty string if the manager array is empty
    if (managerArray.length === 0) return "";

    const cards = [];

    //for each manager in the manager array, extract the individual data items and insert into a template literal, format it as html using prettier, and push into the managerCards array. 
    managerArray.forEach(manager => {
        let name = manager.name;
        let id = manager.id;
        let email = manager.email;
        let office = manager.office;
        
        let card = prettier.format(
            `
            <div class="manager card">
            <header>
                <h2 class="name">${name}</h2>
                <h3><i class="fas fa-clipboard-list"></i> Manager</h3>
            </header>
            <ul>
                <li><span>ID:</span>${id}</li>
                <li><span>Email:</span><a href="mailto:${email}">${email}</a></li>
                <li><span>Office:</span>${office}</li>
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

module.exports = generateManagerCards;
