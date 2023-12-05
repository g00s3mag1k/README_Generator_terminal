// TODO: Include packages needed for this application
const fs = require('fs'); 

const inquirer = require('inquirer');

const generateReadMe = require('./generateMarkdown.js');

// TODO: Create an array of questions for user input

const generateQuestions = [
    {
        type: 'input',
        name: 'Title',
        message: 'Name of your Project?'
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Brief Description of your Project; '
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'Explain installation instructions if any: '
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'List the languages you used in your project; '
    },
    {
        type: 'input',
        name: 'Credits',
        message: 'List your collaborators, if any; '
    },
    {
        type: 'checkbox',
        name: 'License',
        message: 'Select a license if applicable: ',
        choices: ['Apache 2.0', 'MIT License', 'Boost Software 1.0', 'Eclipse 2.0', 'Mozilla 2.0', 'The Unlicense', 'None'],
    },
    {
        type: 'input',
        name: 'Features',
        message: 'If your project has features, list them here. '
    },
    {
        type: 'input',
        name: 'E-mail',
        message: 'Provide an e-mail address: '
    },
    {
        type: 'input',
        name: 'GitHub',
        message: 'What is your Github Username?'
    },
];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) throw err;
      console.log("README file has been created!");
    });
}

// TODO: Create a function to initialize app

function init() {
    inquirer.prompt(generateQuestions).then(function() {})
}

// Function call to initialize app

init();
