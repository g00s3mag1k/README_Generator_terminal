// packages to run application
const fs = require('fs'); 
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown.js');
console.log("Welcome to my README.md generator!");

// an array of questions for user input
const generateQuestions = [
    {
        type: 'input',
        name: 'Title',
        message: 'Name of your Project?'
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Brief Description of your Project? '
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
        type: 'list',
        name: 'License',
        message: 'Select a license if applicable: ',
        choices: ['Apache 2.0', 'MIT', 'Boost Software 1.0', 'Eclipse 2.0', 'GNU GPLv3', 'None']
    },
    {
        type: 'input',
        name: 'Email',
        message: 'Provide an e-mail address: '
    },
    {
        type: 'input',
        name: 'Github',
        message: 'What is your Github Username?'
    }
];

// function to write README file

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        return console.log(err);
      }
      console.log("README file has been created!");
    });
  };

// function to initialize app

function init() {
 inquirer
 .prompt(generateQuestions).then(function(responses) {
 console.log(responses)
 writeToFile("README.md", generateMarkdown(responses));
});
};

// Function call to initialize app
init();