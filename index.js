const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./lib/circle.js');
const Triangle = require('./lib/triangle.js');
const Square = require('./lib/square.js');

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

// function to create svg markdown
function generateSvg(data) {
    let shape;

    if (data.logoShape === 'circle') {
        shape = new Circle(data.shapeColor);
    } else if (data.logoShape === 'square') {
        shape = new Square(data.shapeColor);
    } else {
        shape = new Triangle(data.shapeColor);
    }
    const svg = `<svg version="1.1"\n\twidth="300" height="200"\n\txmlns="http://www.w3.org/2000/svg">\n\t<rect width="100%" height="100%" fill="white" />\n\t${shape.render()}\n\t<text x="${shape.textX}" y="${shape.textY}" font-size="${shape.fontSize}" text-anchor="middle" fill="${data.textColor}">${data.logoText.toUpperCase()}</text>\n</svg>`
    return svg;
}

// function to write SVG file
function writeToFile(fileName, data) {
    // write svg
    fs.writeFile(fileName, data, (error) => error ? console.log(error) : console.log('Generated logo.svg!'));
}

// function to initialize app
async function init() {
    const answers = await inquirer.prompt(questions); // store prompt answers
    const logo = generateSvg(answers);  // create svg

    writeToFile('logo.svg', logo); // write svg
}

// Function call to initialize app
init();