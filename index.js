const inquirer = require('inquirer');
const fs = require('fs');

// Create an array of questions for user input
const questions = [
    // LOGO TEXT
    {
        type: 'input',
        name: 'logoText',
        message: 'Enter desired text for logo (3 characters max):',
        validate: function (input) {
            return input.length > 0 && input.length <=3 ? true : console.error('\n\u{26A0} Error: Logo length must be between 1 and 3 characters');
        }
    },
    // TEXT COLOR
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter color for text (keyword color or hexadecimal):',
        validate: function (input) {
            const hasInput = input ? true : console.error('\n\u{26A0} Error: Must provide color for the logo');
            const isValid = input.match(/^[a-zA-Z]+$/i) || input.match(/^#[0-9A-F]{6}$/i);

            return hasInput && isValid ? true : console.error('\n\u{26A0} Error: Color must be in keyword or hexadecimal format');
        }
    },
    // LOGO SHAPE
    {
        type: 'list',
        name: 'logoShape',
        message: 'Select shape for logo:',
        choices: ['circle', 'triangle', 'square'],
    },
    // SHAPE COLOR
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter color for shape (keyword color or hexadecimal):',
        validate: function (input) {
            const hasInput = input ? true : console.error('\n\u{26A0} Error: Must provide color for the logo');
            const isValid = input.match(/^[a-zA-Z]+$/i) || input.match(/^#[0-9A-F]{6}$/i);

            return hasInput && isValid ? true : console.error('\n\u{26A0} Error: Color must be in keyword or hexadecimal format');
        }
    },
]

// function to write SVG file
function writeToFile(fileName, data) {
    
    const svg = data; // TODO: rework this

    fs.writeFile(fileName, svg, (error) => error ? console.log(error) : console.log('Generated logo.svg!'));
}

// function to initialize app
async function init() {

    // store prompt answers
    const answers = await inquirer.prompt(questions);
    console.log(answers);
    writeToFile('logo.svg', JSON.stringify(answers)); // TODO: replace answers?
}

// Function call to initialize app
init();