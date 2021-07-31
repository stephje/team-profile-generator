const prettier = require('prettier');
const Intern = require('../lib/intern.js');
const Manager = require('../lib/engineer.js');
const Engineer = require('../lib/manager.js');
const generateManagerCards = require('./generateManagerCards.js');
const generateInternCards = require('./generateInternCards.js');
const generateEngineerCards = require('./generateEngineerCards.js');

function generateReport(managerArray, engineerArray, internArray) {

    console.log("managers:", managerArray)
    console.log("engineers:", engineerArray)
    console.log("interns:", internArray)

    //Create a report based on template literal. Generate employee cards by invoking generateManagerCards, generateInternCards and generateEngineerCards functions, passing in the appropriate array to each. Format report using prettier.
    const formattedReport = prettier.format(
        `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Team Profile</title>
                <!-- Google Fonts -->
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
                    integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
                <link rel="stylesheet" href="./style.css">
            </head>
            
            <body>
            
                <header>
                    <h1>Team Profile</h1>
                </header>
            
                <main>
                <div class="managers flex">${generateManagerCards(managerArray)}</div>
                <hr>
                <div class="interns flex">${generateInternCards(internArray)}</div>
                <hr>
                <div class="engineers flex">${generateEngineerCards(engineerArray)}</div>
                </main>
            
            </body>
            </html>
    
        `,
        { parser: 'html' }
    );

    //return the complete formatted report
    return formattedReport;
}

module.exports = generateReport;
