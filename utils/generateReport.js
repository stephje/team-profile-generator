
const Employee = require("../lib/employee.js");
const Intern = require("../lib/intern.js");
const Manager = require("../lib/engineer.js");
const Engineer = require("../lib/manager.js");

function generateReport(employeeArray) {
    console.log("This is the employee array within the generate report function", employeeArray);

    employeeArray.forEach(element => {
        if (element instanceof Intern) {
            console.log("Intern", element);
        } else if (element instanceof Manager) {
            console.log("Manager", element);
        } else if (element instanceof Engineer) {
            console.log("Engineer", element);
        }
    });

    return `
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
    
            <div class="managers flex">
                <div class="manager card">
                    <header>
                        <h2 class="name"></h2>
                        <h3><i class="fas fa-clipboard-list"></i> Manager</h3>
                    </header>
                    <ul>
                        <li>ID: <span class="id"></span></li>
                        <li>Email: <span class="email"></span></li>
                        <li>Office: <span class="office"></span></li>
                    </ul>
                </div>
            </div>
    
            <hr>
    
            <div class="engineers flex">
                <div class="engineer card">
                    <header>
                        <h2 class="name"></h2>
                        <h3><i class="fas fa-laptop-code"></i> Engineer</h3>
                    </header>
                    <ul>
                        <li>ID: <span class="id"></span></li>
                        <li>Email: <span class="email"></span></li>
                        <li>GitHub: <span class="github"></span></li>
                    </ul>
                </div>
            </div>
    
            <hr>
    
            <div class="interns flex">
                <div class="intern card">
                    <header>
                        <h2 class="name"></h2>
                        <h3><i class="fas fa-graduation-cap"></i> Intern</h3>
                    </header>
                    <ul>
                        <li>ID: <span class="id"></span></li>
                        <li>Email: <span class="email"></span></li>
                        <li>School: <span class="school"></span></li>
                    </ul>
                </div>
            </div>
    
        </main>
    
    </body>
    
    </html>
    
`
}

module.exports = generateReport;