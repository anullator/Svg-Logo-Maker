const inquirer = require('inquirer');

// Create an array of questions for user input
const questions = [
    // LOGO TEXT
    {
        type: 'input',
        name: 'text',
        message: 'Enter desired text for logo (3 characters max):',
        validate: function (input) {
            const hasInput = input ? true : console.error('\n\u{26A0} Error: Must provide text for the logo');
            const maxThree = input.length <= 3 ? true : console.error('\n\u{26A0} Error: Logo must be 3 characters or less');
            return hasInput && maxThree;
        }
    },
]

// function to initialize app
async function init() {

    // store prompt answers
    const answers = await inquirer.prompt(questions);
}

// Function call to initialize app
init();