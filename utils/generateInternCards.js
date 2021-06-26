const prettier = require('prettier');

function generateInternCards(internArray) {
    //return empty string if the intern array is empty
    if (internArray.length === 0) return "";

    const cards = [];

    //for each intern in the intern array, extract the individual data items and insert into a template literal, format it as html using prettier, and push into the cards array. 
    internArray.forEach(intern => {
        let name = intern.name;
        let id = intern.id;
        let email = intern.email;
        let school = intern.school;
        
        let card = prettier.format(
            `
            <div class="intern card">
            <header>
                <h2 class="name">${name}</h2>
                <h3><i class="fas fa-graduation-cap"></i> Intern</h3>
            </header>
            <ul>
                <li>ID: <span class="id">${id}</span></li>
                <li>Email: <span class="email">${email}</span></li>
                <li>School: <span class="school">${school}</span></li>
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

module.exports = generateInternCards;
